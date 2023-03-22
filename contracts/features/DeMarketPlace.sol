// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0;
// The martketpalce
// This will be a interesting feature
// Going to need to setup this smart contract that allows users to I guess either put thier nfts to trade. or hmm.

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";

contract DeMarketPlace is ERC721URIStorage {

  // Keep Track Of Token Ids

  // Three Arrays.. with secreat words or theme words

  constructor() ERC721 ("deCube","BLOCK") {
    console.log("This is going to be a NFT I love you");
  }


}
