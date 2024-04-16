import NFTCard from "@/components/NFTCard";
import { WalletContext } from "@/context/WalletContext";
import { useOwnedNFTList } from "@/hooks";
import { Button } from "antd";
import React, { useContext } from "react";

const SelectNFT = () => {
  const { selectedAddress } = useContext(WalletContext);
  const nfts = useOwnedNFTList(selectedAddress);
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl leading-normal font-bold">
          Select NFT to shard
        </h1>
        <p>Which of your NFTs would you like to divide into token fractions?</p>
      </div>
      <div className="grid grid-cols-4 ">
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
    </div>
  );
};

export default SelectNFT;
