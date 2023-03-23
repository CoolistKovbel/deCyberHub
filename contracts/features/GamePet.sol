// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GamePet is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // event will be caught by the front-end... just need help relearning this again 
    event NewCyberPet(uint cyberId, string name, string imgUrl, uint dna);

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    // The content of a cyber pet.
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
        ownerCyberPetCount[msg.sender]++;
        emit NewCyberPet(_tokenIds.current(), _name, _imgURL, _dna);
        _mintItem(msg.sender, _name);
        _tokenIds.increment();

    }

    // CreateRandomPetDNA
    function _genereateRandomPetDna(string memory _str) private view returns(uint){
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    // CreateRandomCyberPet
    function createRandomCyberPet(string memory _name, string memory _imgURL) public {
        uint randDna = _genereateRandomPetDna(_name);
        _createCyberPet(_name, _imgURL, randDna);
    }

    // _mintItem
    function _mintItem(address owner, string memory tokenURI) private returns(uint256) {
        _mint(owner, _tokenIds.current());
        _setTokenURI(_tokenIds.current(), tokenURI);
        return _tokenIds.current();
    }

    // GetCyberPet
    function getCyberPet(uint256 id) public view returns(CyberPet memory){
        return cyberPets[id];
    }

    // GetTotalCyberPets
    function getTotalCyberPets() public view returns(uint256){
        return cyberPets.length;
    }

}
