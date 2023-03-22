async function main() {
  // We grab details from hardhat and get smart contract and plug it in
  const [owner, randomperson] = await ethers.getSigners();
  const deHubFactory = await ethers.getContractFactory("deHub")
  const deHubContract = await deHubFactory.deploy()
  await deHubContract.deployed()

  // These are our i guess important address
  console.log(deHubContract.address)
  console.log(owner.address)

  // --- We start calling and testing smart contract functions ---
  await deHubContract.getTotalAccounts()

  const accountv1 = await deHubContract.createAccount(
    'anonymous',
    'anonymous@proton.com'
  )

  await accountv1.wait()

  // const accountv2 = await deHubContract.connect(randomperson.address).createAccount(
  //   'stacysmom',
  //   'haditgoingon@thefountains.com'
  // )

  // await accountv2.wait()

  await deHubContract.getTotalAccounts()


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


