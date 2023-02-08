// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GFALToken is ERC20 {
    constructor() ERC20("Games For A Living", "GFAL") {
        _mint(msg.sender, 10000000000 * 10 ** decimals());
    }
}
