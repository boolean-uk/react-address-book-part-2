import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">Contacts List</Link>
      <Link to="/add">Add New Contact</Link>
    </div>
  );
}

export default Menu;
