// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const FactoryContract = await hre.ethers.getContractFactory("NFShardsFactory");
  const factoryContract = await FactoryContract.deploy();

  await factoryContract.deployed();

  const NftContract = await hre.ethers.getContractFactory("NFSERC721");
  const nftContract = await NftContract.deploy();

  await nftContract.deployed();

  console.log(
    `NFShardsFactory deployed to ${factoryContract.address}`
  );
  console.log(
    `NFSERC721 deployed to ${nftContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
