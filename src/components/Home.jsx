import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-item-center bg-light vh-100">
      <h2>Address Book</h2>
      <Link to="/create" className="btn btn-success my-3">Create +</Link>
      <Link to="/contact-list" className="btn btn-primary my-3">Contact List</Link>
    </div>
  );
}

export default Home;
