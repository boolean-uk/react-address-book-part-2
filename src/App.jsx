import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContactView from "./pages/ContactView/ContactView";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

// Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function App() {
  const [contacts, setContacts] = useState([]);

  // Get data
  const getData = async () => {
    const res = await fetch("https://boolean-uk-api-server.fly.dev/shyye/contact");
    const data = await res.json();
    setContacts(data);
  };

  // On add/create, save data to api
  const saveData = async (contact) => {
    const res = await fetch("https://boolean-uk-api-server.fly.dev/shyye/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    setContacts([...contacts, data]);
  };

  // Load data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <h1>Contacts</h1>
        <nav>
          <ul>
            <li><Link to={"/"}>Contact List</Link></li>
            <li><Link to={"/add"}>Add new Contact</Link></li>
          </ul>
        </nav>
      </header>
      <AppContext.Provider value={{ contacts, setContacts, saveData }}>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<ContactView />} />
            <Route path="/contact/:id" element={<ContactView />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export {App, AppContext};
