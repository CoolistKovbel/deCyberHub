import React from 'react'


// Components
import MainHeader from './components/MainHeader.js'
import EnterHub from './EnterHub.js'

const Home = ({currentAccount, setCurrentAccount, connectWallet, createAccount, currentAmountOfAccount}) => {


  return (
    <section>
      <MainHeader 
          account={currentAccount} 
          setAccount={setCurrentAccount} 
          connectWallet={connectWallet} />
      <EnterHub 
          createAccount={createAccount} 
          currentAmountOfAccounts={currentAmountOfAccount}/> 
    </section>
  )

}


export default Home