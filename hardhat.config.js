require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/AbqqdjSFVl7SLgRworzdDoorzTquVzr6',
      accounts: ['443adc8a9b7288f40d9c96df87d66bfb09fa410f5e438c285deb22f763eab6c0']
    }
  }
};
