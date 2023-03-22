async function main() {
  // Test Accounts ; use accounts.account or accounts.address to get address i forget
  const [accounts, accounts2, accounts3, accounts4, accounts5] = await ethers.getSigners();
  // Smart Contracts
  const deHubFactory = await ethers.getContractFactory("deHub")
  const deChatFactory = await ethers.getContractFactory("DeChat")
  // const deTokenFactory = await ethers.getContractFactory("DeToken")
  // const GamePetFactory = await ethers.GamePetFactory("GamePet")
  
  // Deploy
  const deHubContract = await deHubFactory.deploy()
  const deChatContract = await deChatFactory.deploy()
  // const gamePetContact = await GamePetFactory.deploy()
  // const deTokenContract = await deTokenFactory.deploy(314159265, [accounts.address, accounts2.address])

  // waiting for transaction to be completed basically
  await deHubContract.deployed()
  await deChatContract.deployed()
  // await gamePetContact.deployed()
  // await deTokenContract.deployed()


  console.log(deHubContract.address)
  console.log(deChatContract.address)
  // console.log(gamePetContact.address)
  // console.log(deTokenContract.address)




}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});