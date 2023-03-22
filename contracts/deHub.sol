// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract deHub {

    uint256 totalAccounts; //total accounts on HUB

    constructor(){}  

    function createAccount() public {
        totalAccounts++;
    }

    function getTotalAccounts() public view returns(uint256) {return totalAccounts;}

}