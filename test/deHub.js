const { expect } = require("chai");

describe("What Is life. Just A few features that is being currently worked on as well as a few way of doing things. There will be steps. And tests.", function() {
  


it("Should check account", async function(){
  const [owner, recipient] = await ethers.getSigners();
  console.log(owner, recipient);
})



})