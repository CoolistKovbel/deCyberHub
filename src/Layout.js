import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <nav className='Layout-Nav'>
      <Link to='/' >🧿</Link>
      <Link to="/account">Account</Link> { /* main account */ }
      <Link to="/channels">Channels</Link> { /* Enter Different channels and meet new people -= your/family/house */ }
      <Link to="/groups">Group</Link> { /* Setup or join groups - For Codin or Gamin or etc, your/friends/house */ }
      <Link to="/defi">Defi</Link> { /* Your own personal Bank Setup with latest tokens your/house/bank */ }
      <Link to="/universal-sufferage">Universal Suffrage</Link> { /* The place to debat or listen to certain world topic and or if we can do it have a voting system between 2 parties, your/politcal/house */ }

      <Outlet />
    </nav>
  )
}

export default Layout