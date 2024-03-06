import React from "react";
import ContactList from "./ContactList";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-options">
        <Link to="/contacts">View Contacts</Link>
        <Link to="/create">Add New Contact</Link>
      </div>
    </div>
  );
}

export default Dashboard;
