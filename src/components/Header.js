import { ethers } from 'ethers'

import '../app.css'

const Navigation = ({ account, setAccount, connectWallet }) => {

  const handleConnect = async () => {
    // connect Accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    
    await connectWallet()
    setAccount(account)
  }

  return (
    <nav>
      <header className="App-header">
        <h1>deCyberHub</h1>
        <p>A place to be to spill your thoughts onto the blockchain</p>
        
        {
          account.length > 0 ? (<p>Welcome ${account}</p>) : (<button onClick={() => handleConnect()}>Connect Now</button>)
        }
        
      </header>

      


    </nav>
  );
}

export default Navigation;