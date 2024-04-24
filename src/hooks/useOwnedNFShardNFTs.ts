import { NFSERC721ABI } from "@/abis/NFSERC721ABI";
import { config } from "@/config";
import { Signer, ethers } from "ethers";
import { useState, useMemo, useEffect } from "react";

export const useOwnedNFShardNFTs = (userAddress: string, signer: Signer) => {
  const [nfts, setNfts] = useState([]);
  const nftContract = useMemo(()=> new ethers.Contract(config.NFTAddress, NFSERC721ABI, signer), [signer]);

  useEffect(() => {
    const fetchNFShardNFTS = async() => {
      const nTokens = await nftContract.balanceOf(userAddress); 
      if (nTokens > 0) {
        const fetchedNfts = [];
        for (let i = 0; i < nTokens ; i++) {
          try {
            const tokenId = await nftContract.tokenOfOwnerByIndex(userAddress, i);
            const tokenUri = await nftContract.tokenURI(tokenId);
            /* TODO: fetch metadata from Pinata
            const tokenUri = await nftContract.tokenURI(tokenId);
            console.log("Token CID is: ");
            console.log(tokenUri.substr(7));
            const metadata = await fetch(
              `https://green-adverse-anaconda-653.mypinata.cloud/${tokenUri.substr(
                7
              )}`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.PINATA_JWT}`,
                },
              }
            );
            */
            fetchedNfts.push({
              token_address: config.NFTAddress,
              token_id: tokenId.toString(),
              token_uri: tokenUri,
              contract_type: 'ERC721Enumerable',
              owner_of: userAddress,
              normalized_metadata: '',
              description: '',
              amount: '',
              name: `NFSHard Test Token #${i}`,
              symbol: 'NFST',
              sync_token_uri: false,
              id: i
            });
          }
          catch (e) {
            console.log("Error fetching NFT data: ", e)
          }
          
        }
        
        setNfts(fetchedNfts);
      }
    }

    if (userAddress) fetchNFShardNFTS();
  }, [nftContract, userAddress])
  
  return nfts;
}