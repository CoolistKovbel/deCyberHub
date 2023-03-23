import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Header from "./components/Header";
import EnterHub from "./EnterHub";

// ABIs
import contractAbi from "./abis/deHub.json";


// Contract Address here
const contractAddress = ''


function App() {

  const [currentAccount, setCurrentAccount] = useState([])


  // We are first going to grab the proivders and signers
  const getEthereum = () => {
    const {ethereum} = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const deHubContract = new ethers.Contract(contractAddress, contractAbi, signer)
    return deHubContract
  }

  // Check to see if our metamask is connected to our website
  const checkIfWalletIsConnected = async () => {
    
    try {
      
      const {ethereum} = window;

      if(!ethereum) {
        alert("Must have metamask installed...");
        return;
      } else{
        console.log("We have a ethereum object");
      }


      // Check to see if we have authorization to users wallet...
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if(accounts.length > 0) {
        const account = accounts[0]
        console.log('There is an account: ', account)
        setCurrentAccount(account)
      } else{
        console.log('You failed bro')
      }

      // Access smart contract and set the total number of blockchain users in deCyberHub smart contract


    } catch (error) {
      console.log(error)
    }

  }

  // Creating a method for users to connect to smart contract if not already connected
  const connectWallet = async () => {
    try{
      const {ethereum} = window
      
      if(!ethereum){
        alert('Y U NO HAVE METAMASK ')
        return
      }

      // Going to need to setup to grab all the accounts again.. maybe

    }catch(error){
      console.log(error)
    }
  }

  function createAccount(e) {
    e.preventDefault()
    console.log('clicked', e.target.elements[0].value)
    console.log('clicked', e.target.elements[1].value)
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <div className="App">
      <Header 
        account={currentAccount} 
        setAccount={setCurrentAccount} 
        connectWallet={connectWallet} />
      <EnterHub 
        createAccount={createAccount} />  
    </div>
  );
}

export default App;


// import { io } from "socket.io-client";

// Config
// import config from "./config.json";

// Socket
// const socket = io("ws://localhost:3030");