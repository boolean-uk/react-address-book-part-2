import { createContext, useEffect, useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import { Contact } from "./types";
import ContactsList from "./components/ContactsList";
import { Route, Routes } from "react-router";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";

export const ContactContext = createContext<{
  contacts: Contact[];
  updateContacts: () => void;
}>(null!);

async function getContacts(): Promise<Contact[]> {
  const response = await fetch(
    "https://boolean-uk-api-server.fly.dev/kristbsy/contact"
  );
  const obj = await response.json();
  console.log(obj);
  return obj;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  const updateContacts = () => {
    getContacts().then(setContacts);
  };
  return (
    <>
      <ContactContext.Provider value={{ contacts, updateContacts }}>
        <SidePanel />
        <Routes>
          <Route path="/" element={<ContactsList />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/create" element={<AddContact />} />
        </Routes>
      </ContactContext.Provider>
    </>
  );
}

export default App;
