import { ProcessContext } from "@/context/ProcessContext";
import { NFT } from "@/types"
import { Card } from 'antd';
import Image from "next/image";
import PlaceholderImg from "public/placeholder.png";
import { useContext, useState } from "react";

const { Meta } = Card;

type Props = {
    nft: NFT
}

const NFTCard = ({nft}: Props) => {
  const { setNftCollectionAddress, setNftTokenId } = useContext(ProcessContext);
  const [ selected, setSelected ] = useState(false);

  const handleSelect = () => {
    if (selected) {
      setSelected(false);
      setNftCollectionAddress(null);
      setNftTokenId(null);
    } 
    else {
      setSelected(true);
      setNftCollectionAddress(nft.token_address);
      setNftTokenId(nft.token_id);
    }
  }

  return (
    <Card
    hoverable
    onClick={handleSelect}
    className={`w-64 ${selected ? 'border-2 border-blue-900' : ''}`}
    cover={<Image alt="example" width={200} height={200} src={nft.uri_media ?? PlaceholderImg} />}
  >
    <Meta title={nft.name} description={nft.token_id} />
  </Card>
  )
}

export default NFTCard