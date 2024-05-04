import { NFShardsFactoryABI } from "@/abis/NFShardsFactoryABI";
import { config } from "@/config";
import { Signer, ethers } from "ethers";
import { useState, useMemo, useEffect } from "react";

export const useShards = (userAddress: string, signer: Signer) => {
  const [shards, setShards] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const shardsContract = useMemo(()=> new ethers.Contract(config.FactoryAddress, NFShardsFactoryABI, signer), [signer]);

  const refreshList = () => {
    setRefresh((prev) => prev + 1);
  }

  useEffect(() => {
    const fetchNFShards = async() => {
      const res = await shardsContract.getNFShardsContracts();
      console.log(res);
      setShards(res);
    }

    if (userAddress) {
      fetchNFShards();
    }
  }, [shardsContract, userAddress, refresh])
  
  return { shards, refreshList };
} 