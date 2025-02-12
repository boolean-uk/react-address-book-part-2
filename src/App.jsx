import { useState, createContext, useEffect } from "react";

import "./App.css";
import Menu from "./components/Menu";
import ContactList from "./components/main/ContactList";
import { Link, Route, Routes } from "react-router-dom";
import ContactDetails from "./components/main/ContactDetails";
import EditContact from "./components/main/EditContact";
import CreateContact from "./components/main/CreateContact";

const ContactsContext = createContext();
const ContentContext = createContext();
const ApiBase = "https://boolean-uk-api-server.fly.dev/nikolailb/contact";

function App() {
  const [contacts, setContacts] = useState([]);

  const updateContacts = () => {
    fetch(ApiBase)
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong with api request!");
        return res.json();
      })
      .then((data) => {
        setContacts(data);
      });
  };

  const regenerateList = () => {
    fetch(ApiBase, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to regenerate contacts list.");
        return res.text();
      })
      .then((data) => {
        console.log("Successfully reloaded contacts list: " + data);
        updateContacts();
      });
  };

  useEffect(() => updateContacts(), []);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts, updateContacts }}>
      <div className="container">
        <Menu>
          <Link to="/">Contacts List</Link>
          <Link to="/contact/create">Create Contact</Link>
          <Link to="/" onClick={regenerateList}>
            Regenerate List (DESTRUCTIVE)
          </Link>
        </Menu>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/create" element={<CreateContact />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/contact/:id/edit" element={<EditContact />} />
        </Routes>
      </div>
    </ContactsContext.Provider>
  );
}

export { App, ContactsContext, ContentContext, ApiBase };
