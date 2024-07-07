import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Contacts List</Link>
          </li>
          <li>
            <Link to="/contacts/new">Add New Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contacts/new" element={<ContactForm />} />
        <Route path="/contacts/:id" element={<ContactDetail />} />
        <Route path="/contacts/:id/edit" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
