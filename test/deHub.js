const { expect } = require("chai");

describe("deployment", function() {
  let deployer, user;
  beforeEach(async () => {
    // Get signers
    [deployer, user] = await ethers.getSigners();
    // Deploy Smart Contract before each test
    const Dappcord = await ethers.getContractFactory("Dappcord");

})