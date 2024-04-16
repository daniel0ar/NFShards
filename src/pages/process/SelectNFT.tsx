import NFTCard from "@/components/NFTCard";
import { WalletContext } from "@/context/WalletContext";
import { useOwnedNFTList } from "@/hooks";
import { Button } from "antd";
import React, { useContext } from "react";

const SelectNFT = () => {
  const { selectedAddress } = useContext(WalletContext);
  const nfts = useOwnedNFTList("0x33aaDa02c476229251Ae0aa211ea1E1bF125Dd51");
  return (
    <>
      <div className="">
        <div className="mb-10">
          <h1 className="text-5xl leading-normal font-bold">
            Select NFT to shard
          </h1>
          <p>Which of your NFTs would you like to divide into token fractions?</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {nfts.length > 0 ? (
            nfts.map((nft, index) => <NFTCard key={index} nft={nft}></NFTCard>)
          ) : (
            <div className="text-center col-span-4 py-10">
              <div className="flex flex-col items-center gap-3">
                <span className="text-slate-400">No NFTs found</span>
                <Button type="primary">Mint One</Button>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default SelectNFT;
