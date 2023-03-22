// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract deHub {

    uint256 totalAccounts = 0; //total accounts on HUB

    
    struct User {
        uint id;
        string name;
        string email;
        address account;
    }
    

    User[] public users; //public users

    constructor(){}  

    // Create Accounts
    function createAccount(string memory _name, string memory _email) public {
        totalAccounts++;
        users.push(User(totalAccounts, _name, _email, msg.sender));
    }

    // Get total Amount
    function getTotalAccounts() public view returns(uint256) {
        console.log('total accounts in smart contract: ', totalAccounts);
        return totalAccounts;
    }


}

// Im dead so many projects. So much time wasted doing things I know I am too good for. NOT putting enough work into things that matter. But at this point I am saying f*ck it. if a 12 year old can make 250k or even more from a nft project. I am going to make sure I make something similar but this project and the community that is going to help build it going to be worth more than that 12 year old or even that 250k. If you are watching this kid.. I envy you and youre talents you make me wish I was in your shoes. I know you will do better than great in life. Your project is also cool but mine will be cooler. 