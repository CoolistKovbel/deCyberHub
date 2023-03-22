// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;
pragma abicoder v1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GamePet is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct CyberPet {
        string name;
        string imgUrl;
        uint dna;
        uint32 level;
        uint256 id;
    }

    CyberPet[] public cyberPets;
    mapping(address => uint) ownerCyberPetCount;

    constructor() public ERC721("CyberPets","CP") {}



    // Create Cyber Pet
    function _createCyberPet(string memory _name, string memory _imgURL, uint _dna) private {
        // Starting off all pets at 1... fair?
        cyberPets.push(CyberPet(_name, _imgURL, _dna, 1, _tokenIds.current()));
        _tokenIds.increment();

    }

    // CreateRandomPet 

    // CreateRandomCyberPet

    // _mintItem

    // GetCyberPet

    // GetTotalCyberPets

}
