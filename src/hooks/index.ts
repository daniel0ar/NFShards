import { config } from "@/config";
import { Signer, ethers } from "ethers";
import { useEffect, useState } from "react";
import { NFSERC721ABI } from "@/abis/NFSERC721ABI";

export const useOwnedNFTList = (userAddress: string) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const response = await fetch(
        `https://shm-indexer.zezu.io/v1/erc721-owners?owner_of=${userAddress}`
      );
      const json = await response.json();
      setNfts(json.results);
    };
    if (userAddress) fetchNFTs();
  }, [userAddress]);

  return nfts;
};

export const useOwnedNFShardNFTs = (userAddress: string, signer: Signer) => {
  const nftContract = new ethers.Contract(config.NFTAddress, NFSERC721ABI, signer);
  return [nftContract.tokenOfOwnerByIndex(userAddress, 0)];
}
