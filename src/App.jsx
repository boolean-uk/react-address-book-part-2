import React from "react";
import AppNavigation from "./components/ui/appNavigation/AppNavigation";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "@/App.css";
import ContactList from "./components/pages/contactList/ContactList";
import ContactEditor from "./components/pages/contactEditor/ContactEditor";
import Contact from "./components/pages/contact/contact";

function App() {
  return (
    <>
      <AppNavigation />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/contacts/" />} />
          <Route path="/contacts/" element={<ContactList />} />
          <Route path="/contacts/:id/*" element={<Contact />} />
          <Route path="/contacts/new" element={<ContactEditor />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
