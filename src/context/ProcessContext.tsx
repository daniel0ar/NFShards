import { createContext, useState } from "react";

interface ProcessContextType {
  nftCollectionAddress: string;
  nftTokenId: string;
  nftName: string;
  nftSymbol: string;
  setNftCollectionAddress: (address: string) => void;
  setNftTokenId: (tokenId: string) => void;
  setNftName: (name: string) => void;
  setNftSymbol: (symbol: string) => void;
  reset: () => void;
  setDetails: (_nftCollectionAddress: string, _nftTokenId: string, _nftName: string, _nftSymbol: string) => void;
}

export const ProcessContext = createContext<ProcessContextType | null>(null);

export const ProcessProvider = ({ children }) => {
  const [nftName, setNftName] = useState<string | null>(null);
  const [nftSymbol, setNftSymbol] = useState<string | null>(null);
  const [nftCollectionAddress, setNftCollectionAddress] = useState<string | null>(null);
  const [nftTokenId, setNftTokenId] = useState<string | null>(null);

  const reset = () => {
    setNftCollectionAddress(null);
    setNftTokenId(null);
    setNftName(null);
    setNftSymbol(null);
  }

  const setDetails = (_nftCollectionAddress: string, _nftTokenId: string, _nftName: string, _nftSymbol: string) => {
    setNftCollectionAddress(_nftCollectionAddress);
    setNftTokenId(_nftTokenId);
    setNftName(_nftName);
    setNftSymbol(_nftSymbol);
  }

  return (
    <ProcessContext.Provider
      value={{
        nftCollectionAddress,
        nftTokenId,
        nftName,
        nftSymbol,
        setNftCollectionAddress,
        setNftTokenId,
        setNftName,
        setNftSymbol,
        reset,
        setDetails,
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
}