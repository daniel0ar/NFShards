export type NFT = {
    token_address: string;
    token_id: string; 
    token_uri: string;
    contract_type: string;
    owner_of: string;
    normalized_metadata: any;
    extension: any;
    attributes: {
      trait_type: string;
      value: string | number;
    }[];
    uri_media: any;
    description: string;
    amount: string;
    name: string;
    symbol: string;
    sync_token_uri: boolean;
    id: string;
  }