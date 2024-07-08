import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <header>
        <h1>Contact Manager</h1>
      </header>
      <div className="main-content">
        <Menu />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
