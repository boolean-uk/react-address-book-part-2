import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import LeftMenu from "./components/LeftMenu";
import CreateContact from "./components/CreateContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

export const Context = createContext();

export function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/hermagst/contact")
      .then((res) => res.json())
      .then((body) => setContacts(body));
  }, []);

  return (
    <Context.Provider value={{ contacts, setContacts }}>
      <div className="App">
        <LeftMenu />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create-contact" element={<CreateContact />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}
