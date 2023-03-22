// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract DeToken is ERC777 {
    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) public ERC777("NullByte", "NULL", defaultOperators) {
        _mint(msg.sender, 1000000,'' ,'');
    }
}
