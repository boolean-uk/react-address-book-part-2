import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import ContactList from "./components/ContactList"; 
import ContactDetail from "./components/ContactDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/contact-list" element={<ContactList />} /> 
        <Route path="/contact-detail/:id" element={<ContactDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
