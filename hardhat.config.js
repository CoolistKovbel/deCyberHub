require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts").setAction(async () =>{
  
//   const accounts = await hre.ethers.getSigners()

//   for (const account of accounts) {
//     console.log(account.address);
// }

// });

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
        url: process.env.INFURA_API_KEY,
        accounts: [process.env.PRIVATEKEY]
    }
  }
};
