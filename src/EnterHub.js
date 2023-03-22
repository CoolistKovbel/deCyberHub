import React from 'react'

function EnterHub({createAccount}) {
  return (
    <section>
      <h2>De Hub</h2>
      <p>Create an account</p>
      <form>
        <label htmlFor="userName">
          <input type="text" name="userName" placeholder="Enter User Name"/>
        </label>
        <label htmlFor="useEmail">
          <input type="email" name="userEmail" placeholder="Enter Your Email"/>
        </label>
        <button onClick={() => createAccount()}>Connect Account</button>
      </form>
  </section>
  )
}

export default EnterHub