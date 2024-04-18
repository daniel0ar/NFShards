// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract NFShards is ERC20, Ownable, ERC20Permit, ERC721Holder {
    IERC721 public collection;
    uint256 public tokenId;
    bool public initialized = false;
    uint256 public tokenPrice;
    uint256 public minAmount;
    uint256 public tokensLeft;

    constructor(address creator, string name, string symbol) Ownable(creator) ERC20(name, symbol) ERC20Permit(name) {}

    function initialize(address _collection, uint256 _tokenId, uint256 _amount, uint256 _tokenPrice, uint256 _minTokens) external onlyOwner {
        require(!initialized, "Already initialized");
        require(_amount > 0, "Amount needs to be more than 0");
        collection = IERC721(_collection);
        collection.safeTransferFrom(msg.sender, address(this), _tokenId);
        tokenId = _tokenId;
        initialized = true;
        tokensLeft = _amount * 10 ** decimals();
        tokenPrice = _tokenPrice;
        minAmount = _minTokens;
    }

    function purchaseTokens(uint256 amount) external payable {
        require(initialized, "Contract not initialized");
        require(amount >= minAmount, "Amount needs to be more than minimum");
        require(msg.value >= amount * tokenPrice, "Price not met");
        require(tokensLeft - (amount * 10 ** decimals()) >= 0, "Not enought tokens left to mint");
        uint256 tokens = amount * 10 ** decimals();
        tokensLeft -= tokens;
        _mint(msg.sender, tokens);
    }

    function setTokenPrice(uint256 _price) external onlyOwner {
        tokenPrice = _price;
    }

    function setMinAmount(uint256 _minAmount) external onlyOwner {
        minAmount = _minAmount;
    }

    function withdraw(uint amount) onlyOwner external {
        require(amount <= address(this).balance);
        payable(owner()).transfer(amount);
    }

    function withdraw() onlyOwner external {
        payable(owner()).transfer(address(this).balance);
    }
}