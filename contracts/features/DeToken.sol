// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract DeToken is ERC777 {
    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) ERC777("NullByte", "NULL", defaultOperators) {
        _mint(msg.sender, initialSupply,'' ,'');
    }
}


// 0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce <- shib smart contract


// erc777 -> NFT -> recieve and transfer tokens. 