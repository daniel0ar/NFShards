import { ProcessContext } from "@/context/ProcessContext";
import React, { useContext } from "react";

type Props = {};

const ShardDetails = (props: Props) => {
  const { nftCollectionAddress, nftTokenId } = useContext(ProcessContext);

  return (
    <>
      <div className="mb-10">
        <h1 className="text-5xl leading-normal font-bold">
          Provide the details
        </h1>
        <p>
          Provide the number of shards from your NFT, the price and more info.
        </p>
      </div>
      <div>
        {nftCollectionAddress && nftTokenId ? (
          <div>
            <p>Collection Address: {nftCollectionAddress}</p>
            <p>Token Id: {nftTokenId}</p>
          </div>
        ) : (
          <div className="text-center py-10">No NFT selected</div>
        )}
      </div>
    </>
  );
};

export default ShardDetails;
