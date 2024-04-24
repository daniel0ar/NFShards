import { useEffect, useState } from "react";

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