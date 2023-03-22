// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract GLDToken is ERC777 {
    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) public ERC777("Gold", "GLD", defaultOperators) {
        _mint(msg.sender, msg.sender, initialSupply, "", "");
    }
}
