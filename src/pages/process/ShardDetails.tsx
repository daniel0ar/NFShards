import { ProcessContext } from '@/context/ProcessContext'
import React, { useContext } from 'react'

type Props = {}

const ShardDetails = (props: Props) => {
  const { nftCollectionAddress, nftTokenId } = useContext(ProcessContext)
  return (
    <>
      <div>
        ShardDetails
      </div>
      <div>
        <p>Collection Address: {nftCollectionAddress}</p>
        <p>Token Id: {nftTokenId}</p>
      </div>
    </>
  )
}

export default ShardDetails