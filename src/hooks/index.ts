import { config } from "@/config";
import { Signer, ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { NFSERC721ABI } from "@/abis/NFSERC721ABI";

export const useOwnedNFTList = (userAddress: string) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch(
          `https://shm-indexer.zezu.io/v1/erc721-owners?owner_of=${userAddress}`
        );
        const json = await response.json();
        setNfts(json.results);
      }
      catch (e){
        console.log(e)
      }
    };
    if (userAddress) fetchNFTs();
  }, [userAddress]);

  return nfts;
};

export const useOwnedNFShardNFTs = (userAddress: string, signer: Signer) => {
  const [nfts, setNfts] = useState([]);
  const nftContract = useMemo(()=> new ethers.Contract(config.NFTAddress, NFSERC721ABI, signer), [signer]);

  useEffect(() => {
    const fetch = async() => {
      const nTokens = await nftContract.balanceOf(userAddress); 
      if (nTokens > 0) {
        const res = await nftContract.tokenOfOwnerByIndex(userAddress, 0);
        console.log("Owned in NFShards is: ");
        console.log(res);
        setNfts([res]);
      }
    }

    fetch();
  }, [nftContract, userAddress])
  
  return nfts;
}
