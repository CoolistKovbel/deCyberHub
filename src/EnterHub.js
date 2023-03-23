import React from 'react'

function EnterHub({createAccount, currentAmountOfAccounts}) {
  return (
    <section id="createAccountOnHub">
      {/* This is wrapping around the inner 2 sections and centering it right now */}
      <div className="createAccountOnHub-container">
        {/* Basically the information */}
        <div className="left-section">
          <h2>deCyberWindow</h2>
          <p>Create an account</p>
          <p>You are basically briging your account onto the blockchain.. itll just wait till see what you can do</p>
          <p>There is currently about {currentAmountOfAccounts} accounts</p>
        </div>
        {/* basically the login section */}
        <div className='right-section'>
          <h2>Create Now</h2>
          <form onSubmit={(e) => createAccount(e)}>
            <label htmlFor="userName">
              <input type="text" name="userName" placeholder="Enter User Name"/>
            </label>
            <label htmlFor="useEmail">
              <input type="email" name="userEmail" placeholder="Enter Your Email"/>
            </label>
            <button>Connect Account</button>
          </form>
        </div>
      </div>

  </section>
  )
}

export default EnterHub