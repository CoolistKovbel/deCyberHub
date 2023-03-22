import { ethers } from 'ethers'

const Navigation = ({ account, setAccount, connectWallet }) => {

  

  return (
    <nav>
      <header className="App-header">
        <h1>deHub</h1>
        <p>A place to be to spill your thoughts onto the blockchain</p>
        <button>Connect Now</button>
      </header>

      {/* {account ? (
        <button
          type="button"
          className='nav__connect'
        >
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className='nav__connect'
          onClick={connectHandler}
        >
          Connect
        </button>
      )} */}


    </nav>
  );
}

export default Navigation;