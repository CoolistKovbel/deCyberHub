import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { io } from "socket.io-client";

// Components
import Navigation from "./components/Navigation";
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>deHub</h1>
        <p>A place to be to spill your thoughts onto the blockchain</p>
      </header>
      <section>
        <h2>De Hub</h2>
        <form>
          <input type="text" />
          <button onClick={createPost}>CreatePost</button>
        </form>
      </section>
    </div>
  );
}

export default App;
