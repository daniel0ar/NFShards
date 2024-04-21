import NFTCard from "@/components/NFTCard";
import { WalletContext } from "@/context/WalletContext";
import { useOwnedNFShardNFTs, useOwnedNFTList } from "@/hooks";
import { Button } from "antd";
import React, { useContext } from "react";
import { ethers } from "ethers";
import { config } from "@/config";
import { NFSERC721ABI } from "@/abis/NFSERC721ABI";

const SelectNFT = () => {
  const { selectedAddress, signer } = useContext(WalletContext);
  const nfts = useOwnedNFTList(selectedAddress);
  const nftsPlatform = useOwnedNFShardNFTs(selectedAddress, signer);
  const allNfts = [...nfts, ...nftsPlatform];
  const nftContract = new ethers.Contract(config.NFTAddress, NFSERC721ABI, signer);

  const mintToken = async() => {
    try {
      const res = await nftContract.safeMint("ipfs://QmSdS7VK16iZbPKuDWVmVMupHiKhYhDJTg1MV7RdfyLvi9");
      await nftContract.approve( selectedAddress, res.value.toString());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div className="mb-10">
          <h1 className="text-5xl leading-normal font-bold">
            Select NFT to shard
          </h1>
          <p>Which of your NFTs would you like to divide into token fractions?</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {allNfts.length > 0 ? (
            allNfts.map((nft, index) => <NFTCard key={index} nft={nft}></NFTCard>)
          ) : (
            <div className="text-center col-span-full py-10">
              <div className="flex flex-col items-center gap-3">
                <span className="text-slate-400">No NFTs found</span>
                <Button type="primary" onClick={mintToken}>Mint One</Button>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default SelectNFT;
