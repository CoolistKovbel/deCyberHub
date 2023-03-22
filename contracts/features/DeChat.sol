// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract DeChat {

  uint256 public totalPosts;

  struct Post{
    uint postID;
    string content;
    address owner;
  }

  mapping(address => uint) public numberOfPostsFromUser;
  mapping(uint => Post) public posts;

  constructor() public {
    console.log('Hello world');
  }

  // Post function

  // get total posts

  // get a single post

  // get a single post with ID

  // Get all posts


}