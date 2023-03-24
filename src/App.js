import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Routes, Route } from "react-router-dom";

// Components
import Account from "./components/Account";
import Home from "./Home";
import Layout from "./Layout";
import Channels from "./components/Channels";
import Group from "./components/Group";
import DeFi from "./components/DeFi";
import UniversalSufferage from "./components/UniversalSufferage";

// ABIs
import contractAbi from "./abis/deHub.json";

// Contract Address here
const contractAddress = "0xb55aafcC47057C62a717D1b5d709d3a21884227C";

function App() {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [currentAmountOfAccount, setCurrentAmountOfAccount] = useState("");

  // We are first going to grab the proivders and signers
  const getEthereum = () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const deHubContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    return deHubContract;
  };

  // Check to see if our metamask is connected to our website
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Must have metamask installed...");
        return;
      } else {
        console.log("We have a ethereum object");
      }

      // Check to see if we have authorization to users wallet...
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("There is an account: ", account);
        setCurrentAccount(account);
      } else {
        console.log("You failed bro");
      }

      // Access smart contract and set the total number of blockchain users in deCyberHub smart contract
      const deHubContract = getEthereum();
      let count = await deHubContract.getTotalAccounts();
      setCurrentAmountOfAccount(count.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  // Creating a method for users to connect to smart contract if not already connected
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Y U NO HAVE METAMASK ");
        return;
      }

      // Going to need to setup to grab all the accounts again.. maybe
    } catch (error) {
      console.log(error);
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();

    try {
      // We are calling the smart contract and putting it into a variable
      const deHubContract = getEthereum();
      // We run the create account function from smart contract
      let deAccount = await deHubContract.createAccount(
        e.target.elements[0].value,
        e.target.elements[1].value
      );
      // We look for transaction hash
      console.log("mining trx", deAccount.hash);
      // We wait till the transaction is finished
      await deAccount.wait();

      let count = await deHubContract.getTotalAccounts();
      setCurrentAmountOfAccount(count.toNumber());

      // We reset the values
      e.target.elements[0].value = "";
      e.target.elements[1].value = "";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                connectWallet={connectWallet}
                createAccount={createAccount}
                currentAmountOfAccounts={currentAmountOfAccount}
              />
            }
          />
          <Route
            path="account"
            element={<Account account={currentAccount} />}
          />
          <Route path="channels" element={<Channels />} />
          <Route path="groups" element={<Group />} />
          <Route path="defi" element={<DeFi />} />
          <Route path="universal-sufferage" element={<UniversalSufferage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import { io } from "socket.io-client";

// Config
// import config from "./config.json";

// Socket
// const socket = io("ws://localhost:3030");
