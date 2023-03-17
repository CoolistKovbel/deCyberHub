const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappcord", function () {
  let dappcord;
  let deployer;
  let user;
  const NAME = "Dappcord"
  const SYMBOL = "DC"

  beforeEach(async () => {
    // Setup Accounts
    [deployer,user] = await ethers.getSigners()

    // Deploy Contract
    const Dappcord = await ethers.getContractFactory("Dappcord")
    dappcord =  await Dappcord.deploy(NAME, SYMBOL)

    // Create a channel
    const transaction = await dappcord.connect(deployer).createChannel("general", tokens(1))
    await transaction.wait()

  })


  describe("Deployment", function(){

    it("Sets the name", async () => {
      // Fetch Name
      let result = await dappcord.name()
      // Check name
      expect(result).to.equal(NAME)
    })

    it("sets the symbol", async() => {
      // Fetch Symbol
      let result = await dappcord.symbol()
      // Check symbol
      expect(result).to.equal(SYMBOL)
    })

    it("Sets the owner", async() =>{
      // fetch owner
      let result = await dappcord.owner()
      expect(result).to.equal(deployer.address)
    })

  })

  describe('Creating channels', () => {

    it('returns total channels', async() => {
      const result = await dappcord.totalChannels()
      expect(result).to.be.equal(1)
    })

    it('returns channel attributes', async() => {
      const channel = await dappcord.getChannel(1)
      expect(channel.id).to.be.equal(1)
      expect(channel.name).to.be.equal("general")
      expect(channel.cost).to.be.equal(tokens(1))
    })


  })

  describe('JOINING channels', () => {
    const ID = 1;
    const AMOUNT = ethers.utils.parseUnits("1", 'ether')

    beforeEach(async () => {
      const transaction = await dappcord.connect(user).mint(ID, { value: AMOUNT })
      await transaction.wait()
    })

    it('joins the user', async() => {
      const result = await dappcord.hasJoined(ID,user.address)
      expect(result).to.be.equal(true)
    })


    it('increases total supply', async() => {
      const result = await dappcord.totalSupply()
      expect(result).to.be.equal(ID)
    })

    it('Updates the contract balance', async () => {
      const result = await ethers.provider.getBalance(dappcord.address)
      expect(result).to.be.equal(AMOUNT)
    })


  })


})
