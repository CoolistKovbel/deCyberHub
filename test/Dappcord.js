const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappcord", function () {
  let deployer, user;
  let dappcord;
  const CHANNEL = "ghostieve";
  const SYMBOL = "im2s4";

  beforeEach(async () => {
    // Get signers
    [deployer, user] = await ethers.getSigners();
    // Deploy Smart Contract before each test
    const Dappcord = await ethers.getContractFactory("Dappcord");
    dappcord = await Dappcord.deploy(CHANNEL, SYMBOL);
    // Create a channel
    const transaction = await dappcord
      .connect(deployer)
      .createChannel("general", tokens(1));
    await transaction.wait();
  });

  describe("deployment", () => {
    it("sets names", async () => {
      // Get Name
      let result = await dappcord.name();
      // Check Name
      expect(result).to.equal(CHANNEL);
    });

    it("and ", async () => {
      // Get Symbol
      let result = await dappcord.symbol();
      // Check Symbol
      expect(result).to.equal(SYMBOL);
    });
  });

  describe("creating Channels", () => {
    it("return total channels", async () => {
      const result = await dappcord.totalChannels();
      expect(result).to.equal(1);
    });

    it("should return attributes", async () => {
      const result = await dappcord.getChannels(1);
      expect(result.id).to.be(1);
      expect(result.name).to.be("general");
      expect(result.cost).to.be(1);
    });
  });
});
