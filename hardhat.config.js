require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    shm: {
      url: "https://hackathon.shardeum.org/",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gas: 20000000,
    },
  },
};
