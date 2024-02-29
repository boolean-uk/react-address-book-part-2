import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
  return(
    <div style={{ padding: '10px'}}>
      <Link to="/" style={linkStyle}>Dashboard</Link>
      <Link to="/createcontact" style={linkStyle}>Create contact</Link>
    </div>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 20px',
  marginRight: '10px',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
}

export default NavBar;
