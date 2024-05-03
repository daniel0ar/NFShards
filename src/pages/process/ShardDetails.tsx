import { ProcessContext } from "@/context/ProcessContext";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Form,
  FormProps,
  Input,
  InputNumber,
} from "antd";
import Image from "next/image";
import { config } from "@/config";
import { ethers } from "ethers";
import { WalletContext } from "@/context/WalletContext";
import { NFShardsFactoryABI } from "@/abis/NFShardsFactoryABI";
import { NFSERC721ABI } from "@/abis/NFSERC721ABI";
import { NFShardsABI } from "@/abis/NFShardsABI";
import PlaceholderImg from "public/placeholder.png";
import { useWaitTx } from "@/hooks";
import { useRouter } from "next/navigation";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

type FieldType = {
  collectionAddress?: string;
  tokenId?: string;
  shardNumber?: number;
  minShards?: number;
  price?: number;
};

const ShardDetails = () => {
  const router = useRouter();
  const { signer } = useContext(WalletContext);
  const { nftCollectionAddress, nftTokenId, nftName, nftSymbol } =
    useContext(ProcessContext);
  const [shardsNumber, setShardsNumber] = useState(null);
  const [shardPrice, setShardPrice] = useState(null);
  const [minShards, setMinShards] = useState(null);
  const { receipt: shardReceipt, setTxhash: setShardTxhash } = useWaitTx();
  const { receipt: approveReceipt, setTxhash: setApproveTxhash } = useWaitTx();
  const { receipt: initReceipt, setTxhash: setInitTxhash } = useWaitTx();
  const factoryContract = useMemo(
    () =>
      new ethers.Contract(config.FactoryAddress, NFShardsFactoryABI, signer),
    [signer]
  );
  const nftContract = useMemo(
    () => new ethers.Contract(config.NFTAddress, NFSERC721ABI, signer),
    [signer]
  );
  const shardContract = useMemo(
    () => {
      if (shardReceipt) {
        return new ethers.Contract(shardReceipt.logs[0]?.address, NFShardsABI, signer) 
      }
    },
    [shardReceipt, signer]
  );

  const deployShardContract = async (values: any) => {
    console.log({ ...values });
    const deployTx = await factoryContract.deployNFShard(
      nftName,
      nftSymbol,
      nftCollectionAddress,
      0,
      shardsNumber,
      shardPrice,
      minShards
    );
    setShardTxhash(deployTx.hash);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    deployShardContract(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Number of Shards",
      children: <p>{shardsNumber}</p>,
    },
    {
      key: "2",
      label: "Shard Price",
      children: <p>{shardPrice}</p>,
    },
    {
      key: "3",
      label: "Mininum Purchase Shards",
      children: <p>{minShards}</p>,
    },
  ];

  const initializeShardContract = useCallback(async () => {
    return shardContract.initialize(
      nftCollectionAddress,
      nftTokenId,
      shardsNumber,
      shardPrice,
      minShards
    );
  }, [
    minShards,
    nftCollectionAddress,
    nftTokenId,
    shardContract,
    shardPrice,
    shardsNumber,
  ]);

  useEffect(() => {
    const approveTransfer = async () => {
      const approveTx = await nftContract.setApprovalForAll(
        shardReceipt.logs[0]?.address,
        true
      );
      setApproveTxhash(approveTx.hash);
    };

    if (shardReceipt) {
      approveTransfer();
    }
  }, [factoryContract, nftContract, setApproveTxhash, shardReceipt]);

  useEffect(() => {
    const initFractions = async () => {
      const initTx = await initializeShardContract();
      setInitTxhash(initTx.hash);
    };

    if (shardReceipt && approveReceipt) {
      initFractions();
    }
  }, [approveReceipt, initializeShardContract, setInitTxhash, shardReceipt]);

  useEffect(() => {
    if (initReceipt) {
      router.push("/feedback");
    }
  }, [initReceipt, router]);

  return (
    <>
      <div className="mt-10">
        <h1 className="text-2xl md:text-5xl leading-normal font-bold">
          Provide the details
        </h1>
        <p>
          Provide the number of shards from your NFT, the price and more info.
        </p>
      </div>
      <div className="overflow-auto">
        {nftCollectionAddress && nftTokenId ? (
          <div className="grid grid-cols-5 gap-5 !text-white">
            <div className="col-span-5 lg:col-span-3">
              <Card
                bordered={false}
                className="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
              >
                <h2 className="text-3xl font-bold mb-10">Details</h2>
                <Form
                  {...formItemLayout}
                  onFinish={onFinish}
                  labelCol={{ flex: "110px" }}
                  labelAlign="left"
                  labelWrap
                  wrapperCol={{ flex: 1 }}
                  colon={false}
                  style={{ maxWidth: 600 }}
                  onFinishFailed={onFinishFailed}
                  id="shard-form"
                  initialValues={{
                    ["collectionAddress"]: nftCollectionAddress,
                    ["tokenId"]: nftTokenId.toString(),
                  }}
                >
                  <Form.Item
                    label="Collection Address"
                    name="collectionAddress"
                    rules={[{ required: true, message: "Please input!" }]}
                    hidden
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Token ID"
                    name="tokenId"
                    rules={[{ required: true, message: "Please input!" }]}
                    hidden
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Number of shards"
                    name="shardNumber"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <InputNumber
                      className="w-full"
                      value={shardsNumber}
                      onChange={(e) => setShardsNumber(e)}
                    />
                  </Form.Item>

                  <Form.Item label="Mininum Purchase Shards" name="minShards">
                    <InputNumber
                      className="w-full"
                      value={minShards}
                      onChange={(e) => setMinShards(e)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Shard Price"
                    name="price"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <InputNumber
                      className="w-full"
                      value={shardPrice}
                      onChange={(e) => setShardPrice(e)}
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 6, span: 16 }} hidden>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
            <div className="col-span-5 lg:col-span-2">
              <Card
                bordered={false}
                className="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
              >
                <div className="flex flex-col gap-5 mb-10">
                  <h2 className="text-3xl font-bold">Summary</h2>
                  <p className="text-muted">
                    Review this final summary before you shard your NFT. Once
                    you shard it, <strong>you cannot make changes.</strong>
                  </p>
                  <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="font-bold text-secondary dark:text-tertiary">
                        Selected NFT
                      </p>
                      <Image
                        alt="NFT"
                        src={PlaceholderImg}
                        width={100}
                        height={100}
                        className="border rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-3 break-all">
                      <p>Collection Address: {nftCollectionAddress}</p>
                      <p>Token ID: {nftTokenId}</p>
                    </div>
                  </div>
                </div>

                <Descriptions
                  items={items}
                  column={1}
                  contentStyle={{ justifyContent: "right", textAlign: "right" }}
                />
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">No NFT selected</div>
        )}
      </div>
    </>
  );
};

export default ShardDetails;
