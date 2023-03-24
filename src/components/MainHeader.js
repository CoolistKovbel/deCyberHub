import { ethers } from 'ethers'

// Component
import '../app.css'

const MainHeader = ({ account, setAccount, connectWallet }) => {

  const handleConnect = async () => {
    // connect Accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    
    await connectWallet()
    setAccount(account)
  }

  return (
      <header className="App-header">
        <div className="App-header-content">
          <h1>deCyberHub</h1>
          <p>A place to be to spill your thoughts onto the blockchain</p>
        </div>
        
        {
          account.length > 0 ? (
            <div className="App-header-welcome-content">
              <p>Welcome ${account}</p>
            </div>
            ) : (<button onClick={() => handleConnect()}>Connect Now</button>)
        }
      
    </header>
  );
}

export default MainHeader;