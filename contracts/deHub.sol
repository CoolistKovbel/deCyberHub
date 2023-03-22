// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract deHub {

    uint256 totalAccounts; //total accounts on HUB

    
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
    function getTotalAccounts() public view returns(uint256) {return totalAccounts;}


}