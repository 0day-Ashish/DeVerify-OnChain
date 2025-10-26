require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.CELO_SEPOLIA_RPC || "https://rpc.ankr.com/celo_sepolia",
      chainId: 11142220,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  sourcify: {
    enabled: true
  }
};
