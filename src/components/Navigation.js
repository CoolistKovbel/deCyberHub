import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='Main-nav'>
      <Link to="/account">Account</Link> 
      <Link to="your/family/house">Channels</Link>
      <Link to="your/friends/house">Group</Link>
      <Link to="your/house/bank">Defi</Link>
      <Link to="your/politcal/house">Universal Suffrage</Link>
    </nav>
  )
}

export default Navigation