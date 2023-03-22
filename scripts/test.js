

async function main() {
  // Test Accounts ; use accounts.account or accounts.address to get address i forget
  const [accounts, accounts2] = await ethers.getSigners();
  // Smart Contracts
  const deHubFactory = await ethers.getContractFactory("deHub")
  const deTokenFactory = await ethers.getContractFactory("DeToken")
  const deChatFactory = await ethers.getContractFactory("DeChat")
  const GamePetFactory = await ethers.GamePetFactory("GamePet")
  
  // Deploy
  const deHubContract = await deHubFactory.deploy()
  const deTokenContract = await deTokenFactory.deploy()
  const deChatContract = await deChatFactory.deploy()
  const gamePetContact = await GamePetFactory.deploy()


  await deHubContract.deployed()
  await deTokenContract.deployed()
  await deChatContract.deployed()
  await gamePetContact.deployed()


  console.log(deChatContract.address)
  console.log(deTokenContract.address)
  console.log(deChatContract.address)
  console.log(gamePetContact.address)



}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});