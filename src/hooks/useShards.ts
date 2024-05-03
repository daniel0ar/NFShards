import { NFShardsFactoryABI } from "@/abis/NFShardsFactoryABI";
import { Signer, ethers } from "ethers";
import { useState, useMemo, useEffect } from "react";

export const useShards = (userAddress: string, signer: Signer, contractAddress: string) => {
  const [nfts, setNfts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const shardsContract = useMemo(()=> new ethers.Contract(contractAddress, NFShardsFactoryABI, signer), [contractAddress, signer]);

  const refreshList = () => {
    setRefresh((prev) => prev + 1);
  }

  useEffect(() => {
    const fetchNFShards = async() => {
    }
  }, [shardsContract, userAddress, refresh])
  
  return { nfts, refreshList };
} 