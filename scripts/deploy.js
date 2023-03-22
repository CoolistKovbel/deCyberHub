

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance()


  console.log("Deploy wcontract with account: ", deployer.address)
  console.log("Account BalL ", accountBalance.toString())

  const deHubFactory = await ethers.getContractFactory("deHub")
  const deHubContract = await deHubFactory.deploy()
  await deHubContract.deployed()

  console.log("dehub contract address", deHubContract.address)

}

const runMain = async () => {
  try{
    await main();
    process.exit()
  } catch(error){
    console.log(error)
    process.exit(1)
  }
}

runMain()