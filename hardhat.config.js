require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 1337
    },
    bsc: {
      url: process.env.WEB3_HTTP_PROVIDER,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
