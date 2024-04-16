import { NFT } from "@/types"
import { Card } from 'antd';
import Image from "next/image";
import PlaceholderImg from "public/placeholder.png";

const { Meta } = Card;

type Props = {
    nft: NFT
}

const NFTCard = ({nft}: Props) => {
  return (
    <Card
    hoverable
    className="w-64"
    cover={<Image alt="example" width={200} height={200} src={nft.uri_media ?? PlaceholderImg} />}
  >
    <Meta title={nft.name} description={nft.token_id} />
  </Card>
  )
}

export default NFTCard