import React, { useState, useEffect, useContext } from "react";
import { ContactContext } from "./ContactsProvider";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { ContactList } from "./components/ContactList";
import { CreateContactForm } from "./components/CreateContactForm";
import ViewContactInfo from "./components/ViewContactInfo";
import UpdateContactForm from "./components/UpdateContactForm";
function App() {
  return (
    <>
      <div className="flex">
        <Navigation />
        <Routes>
          <Route path="/view" element={<ContactList />} />
          <Route path="/create" element={<CreateContactForm />} />
          <Route path="/view/:id/edit" element={<UpdateContactForm />} />
          <Route path="/view/:id" element={<ViewContactInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
