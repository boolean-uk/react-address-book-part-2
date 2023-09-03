import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/contact-list">View Contact List</Link>
          </li>
          <li>
            <Link to="/new-contact">Create New Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Dashboard;
  
