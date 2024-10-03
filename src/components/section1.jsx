import React from 'react'
import { Link } from 'react-router-dom';

const Section1 = () => {
return (
  <div className="section1-menu text-center">
    <ul>
      <li>
        <Link to="/">Contact List</Link>
      </li>
      <li>
        <Link to="/create">Add New Contact</Link>
      </li>
    </ul>
    
  </div>
  
);
}

export default Section1