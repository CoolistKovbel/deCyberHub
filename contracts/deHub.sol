// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./GameItem.sol";

contract deHub is ERC721 {
    event newPost(uint postId, string content, address owner);

    // Variable
    address public owner;
    uint256 public totalChannels;
    uint256 public totalAccounts;
    uint256 public totalSupply;
    uint256 public totalPosts;

    // Data Structure
    struct Channel {
        uint256 id;
        string name;
        uint256 cost;
    }

    struct Account {
        uint256 id;
        address userAddress;
        string name;
    }

    struct Post {
        uint postId;
        string content;
        address owner;
    }

    // Saving data
    mapping(uint256 => Channel) public channels;

    Account[] public accounts;

    mapping(address => uint) public numberOfPostsFromUser;

    mapping(uint => Post) public posts;

    // modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Sorry who are you?");
        _;
    }

    constructor(
        string memory _channel,
        string memory _symbol
    ) ERC721(_channel, _symbol) {
        // person who calls smart contract will be owner
        owner = msg.sender;
    }

    // Create a channel
    function createChannel(
        string memory _name,
        uint256 _cost
    ) public onlyOwner {
        totalChannels++;
        channels[totalChannels] = Channel(totalChannels, _name, _cost);
    }

    // Creates a post
    function post(string memory _post) public {
        totalPosts += 1;

        posts[totalPosts] = Post(totalPosts, _post, msg.sender);

        numberOfPostsFromUser[msg.sender]++;

        console.log(
            "%s sent a post and has %d posts",
            msg.sender,
            numberOfPostsFromUser[msg.sender]
        );

        emit newPost(totalPosts, _post, msg.sender);
    }

    // Get Channels
    function getChannels(uint256 _id) public view returns (Channel memory) {
        return channels[_id];
    }

    // Get Total Posts
    function getTotalPosts() public view returns (uint256) {
        console.log("We have %d total posts", totalPosts);
        return totalPosts;
    }

    // Create an account
    function createAccount(string memory _name) public {
        totalAccounts++;
        accounts.push(Account(totalAccounts, msg.sender, _name));
    }

    // Get single post count
    function singlePostCount() public view returns (uint) {
        console.log(
            "%s has made %d post",
            msg.sender,
            numberOfPostsFromUser[msg.sender]
        );
        return numberOfPostsFromUser[msg.sender];
    }

    // Get single post with id
    function getPostWithId(uint _id) public view returns (Post memory) {
        return posts[_id];
    }

    // Get all posts
    function getPosts() public view returns (Post[] memory) {
        Post[] memory id = new Post[](totalPosts);

        for (uint i = 0; i < totalPosts; i++) {
            Post storage posts = posts[i];
            id[i] = posts;
        }

        return id;
    }

    // Mint
    function mint() public payable {
        _safeMint(msg.sender, totalSupply);
    }
}
