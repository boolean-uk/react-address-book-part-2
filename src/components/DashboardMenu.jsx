import React from 'react';
import { Link } from 'react-router-dom';

function DashboardMenu() {
  return (
    <div className="menu-items">
      <h2>Menu</h2>
      <Link to="/"><p>Contact List</p></Link>
      <Link to="/new"><p>Add New Contact</p></Link>
    </div>
  );
}

export default DashboardMenu;