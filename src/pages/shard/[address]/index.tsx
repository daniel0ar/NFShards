import Link from 'next/link';
import React from 'react'

const ShardDetails = ({ params }: { params: { address: string } }) => {
  // TODO: Fix address and useShard hook
  return (
    <div className="flex flex-col flex-grow pt-10">
      <div className="flex min-h-[70vh] p-4 text-center">
        <div className="my-auto">
          <h1 className="p-4 text-5xl font-bold">Shard Details</h1>
          <span className="text-lg">{params?.address}</span>
          <br />
          <Link
            className="bg-white border-2 border-black text-black px-5 py-3 rounded-lg inline-block mt-5"
            href="/"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShardDetails