import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { ContactList } from "./components/ContactList";
import { fetchContacts } from "./helpers/APIRequester";
import { CreateContactForm } from "./components/CreateContactForm";
import ViewContactInfo from "./components/ViewContactInfo";
import UpdateContactForm from "./components/UpdateContactForm";
function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, [contacts]);

  return (
    <>
      <div className="flex">
        <Navigation />
        <Routes>
          <Route path="/view" element={<ContactList contacts={contacts} />} />
          <Route
            path="/create"
            element={<CreateContactForm setContacts={setContacts} />}
          />
          <Route
            path="/view/:id/edit"
            element={
              <UpdateContactForm
                contacts={contacts}
                setContacts={setContacts}
              />
            }
          />
          <Route
            path="/view/:id"
            element={<ViewContactInfo contacts={contacts} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
