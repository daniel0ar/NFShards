import { createContext, useState } from "react";

interface ProcessContextType {
  nftCollectionAddress: string;
  nftTokenId: string;
  setNftCollectionAddress: (address: string) => void;
  setNftTokenId: (tokenId: string) => void;
}

export const ProcessContext = createContext<ProcessContextType | null>(null);

export const ProcessProvider = ({ children }) => {
  const [nftCollectionAddress, setNftCollectionAddress] = useState<string | null>(null);
  const [nftTokenId, setNftTokenId] = useState<string | null>(null);

  return (
    <ProcessContext.Provider
      value={{
        nftCollectionAddress,
        nftTokenId,
        setNftCollectionAddress,
        setNftTokenId
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
}