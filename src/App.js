import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { io } from "socket.io-client";

// Components
import Header from "./components/Header";
import Servers from "./components/Servers";
import Channels from "./components/Channels";
import Messages from "./components/Messages";

// ABIs
import Dappcord from "./abis/Dappcord.json";

// Config
import config from "./config.json";

// Socket
const socket = io("ws://localhost:3030");

function App() {


  function createAccount() {

  }


  return (
    <div className="App">
      <Header />
      <section>
        <h2>De Hub</h2>
        <p>Create an account</p>
        <form>
          <label htmlFor="userName">
            <input type="text" name="userName" placeholder="Enter User Name"/>
          </label>
          <label htmlFor="password">
            <input type="password" name="password" placeholder="Enter Password"/>
          </label>
          <button onClick={createAccount}>Connect Account</button>
        </form>
      </section>
    </div>
  );
}

export default App;
