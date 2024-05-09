import { NFShardsABI } from "@/abis/NFShardsABI";
import { Signer, ethers } from "ethers";
import { useState, useMemo, useEffect } from "react";

export const useShard = (userAddress: string, signer: Signer, address: string) => {
  const shardContract = useMemo(()=> new ethers.Contract(address, NFShardsABI, signer), [address, signer]);
  const [ shard, setShard ] = useState();

  useEffect(() => {
    const fetchNFShard = async() => {
      const res = await shardContract.tokensLeft();
      console.log(res);
      setShard(res);
    }

    if (userAddress) {
      fetchNFShard();
    }
  }, [shardContract, userAddress])
  
  return { shard };
} 