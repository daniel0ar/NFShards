import NFTCard from "@/components/NFTCard";
import { useOwnedNFTList } from "@/hooks";
import React from "react";

const SelectNFT = () => {
  const nfts = useOwnedNFTList("0x33aaDa02c476229251Ae0aa211ea1E1bF125Dd51")
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
