import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='menu'>
        <h1>Menu</h1>
        <Link to="/contacts" className="menu-link">
          <p>Contact List</p>
        </Link>
        <Link to="/create-contact" className="menu-link">
          <p>Create Contact</p>
        </Link>
    </div>
  )
}

export default Dashboard;
