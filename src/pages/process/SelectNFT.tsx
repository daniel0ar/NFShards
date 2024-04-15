import NFTCard from "@/components/NFTCard";
import { nfts } from "@/data";
import React from "react";

type Props = {};

const SelectNFT = (props: Props) => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl leading-normal font-bold">Select NFT to shard</h1>
        <p>
          Which of your NFTs would you like to divide into token fractions?
        </p>
      </div>
      <div className="grid grid-cols-4 ">
        {nfts.map((nft, index) => (
          <NFTCard key={index} nft={nft}></NFTCard>
        ))}
      </div>
    </div>
  );
};

export default SelectNFT;
