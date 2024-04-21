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
  const { reset, setDetails } = useContext(ProcessContext);
  const [ selected, setSelected ] = useState(false);

  const handleSelect = () => {
    if (selected) {
      setSelected(false);
      reset();
    } 
    else {
      setSelected(true);
      setDetails(nft.token_address, nft.token_id, nft.name, nft.symbol);
    }
  }

  return (
    <div className="col-span-1">
      <Card
      hoverable
      onClick={handleSelect}
      className={`dark:bg-secondary ${selected ? 'border-4 border-white-900' : ''}`}
      cover={<Image alt="example" width={200} height={200} src={nft.uri_media ?? PlaceholderImg} />}
    >
      <Meta title={nft.name} description={nft.description} />
    </Card>
    </div>
  )
}

export default NFTCard