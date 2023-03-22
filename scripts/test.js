const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const cyberHubFactory = await hre.ethers.getContractFactory("deHub");
  const cyberHub = await cyberHubFactory.deploy();
  await cyberHub.deployed();

  console.log("contract deployed to", cyberHub.address);
  console.log("Contract deployed by:", owner.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
