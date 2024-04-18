// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./NFShards.sol";

contract NFShardsFactory {
    struct ShardContract {
        address contractAddress;
        address creator;
        string name;
        string symbol;
        address _collection;
        uint256 _tokenId;
        uint256 _amount;
        uint256 _tokenPrice;
        uint256 _minTokens;
    }
    ShardContract[] public shardContracts;

    function deployNFShard(
        string memory name,
        string memory symbol,
        address _collection,
        uint256 _tokenId,
        uint256 _amount,
        uint256 _tokenPrice,
        uint256 _minTokens
    ) external returns (address) {
        NFShards nfShard = new NFShards(msg.sender, name, symbol);
        nfShard.initialize(
            _collection,
            _tokenId,
            _amount,
            _tokenPrice,
            _minTokens
        );
        shardContracts.push(
            ShardContract(
                address(nfShard),
                msg.sender,
                name,
                symbol,
                _collection,
                _tokenId,
                _amount,
                _tokenPrice,
                _minTokens
            )
        );
        return address(nfShard);
    }

    function getNFShardsContracts() external view returns (ShardContract[] memory) {
        return shardContracts;
    }
}
