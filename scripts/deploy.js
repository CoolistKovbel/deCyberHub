const hre = "hardhat" 

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance()


  console.log("Deploy wcontract with account: ", deployer.address)
  console.log("Account BalL ", accountBalance.toString())




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