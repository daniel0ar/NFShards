import { ProcessContext } from "@/context/ProcessContext";
import React, { useContext, useMemo, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Descriptions,
  DescriptionsProps,
  Form,
  FormProps,
  Input,
  InputNumber,
  Row,
} from "antd";
import Image from "next/image";


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
  const { nftCollectionAddress, nftTokenId } = useContext(ProcessContext);
  const [shardsNumber, setShardsNumber] = useState(null);
  const [shardPrice, setShardPrice] = useState(null);
  const [minShards, setMinShards] = useState(null);

  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const items: DescriptionsProps["items"] = useMemo(() => [
    {
      key:"1",
      label: "Number of Shards",
      children: <p>{shardsNumber}</p>
    },
    {
      key: "2",
      label: "Shard Price",
      children: <p>{shardPrice}</p>
    },
    {
      key: "3",
      label: "Mininum Purchase Shards",
      children: <p>{minShards}</p>,
    },
  ], [shardsNumber, shardPrice, minShards]);

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
            <div className="col-span-5 md:col-span-3">
              <Card bordered={false} className="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
                <Form {...formItemLayout} onFinish={onFinish}
                    onFinishFailed={onFinishFailed} id="shard-form"
                    initialValues={{["collectionAddress"]: nftCollectionAddress, ["tokenId"]: nftTokenId}}>
                  <h2 className="text-3xl font-bold mb-10">Details</h2>
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
                    <InputNumber className="w-full" value={shardsNumber} onChange={(e) => setShardsNumber(e.value)}/>
                  </Form.Item>

                  <Form.Item
                    label="Mininum Purchase Shards"
                    name="minShards"
                  >
                    <InputNumber className="w-full" value={minShards} onChange={(e) => setMinShards(e.value)}/>
                  </Form.Item>

                  <Form.Item
                    label="Shard Price"
                    name="price"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <InputNumber className="w-full" value={shardPrice} onChange={(e) => setShardPrice(e.value)}/>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 6, span: 16 }} hidden>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
            <div className="col-span-5 md:col-span-2">
              <Card bordered={false} className="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
                <div className="flex flex-col gap-5 mb-10">
                  <h2 className="text-3xl font-bold">Summary</h2>
                  <p className="text-muted">Review this final summary before you shard your NFT. Once you shard it, <strong>you cannot make changes.</strong></p>
                  <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="font-bold text-secondary dark:text-tertiary">Selected NFT</p>
                      <Image alt="NFT" src="/images/nft.png" width={100} height={100} className="border rounded-lg"/>
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
