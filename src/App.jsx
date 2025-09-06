/* eslint-disable no-undef */
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import "./App.css";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import Profile from "./pages/Profile";
import EditContact from "./pages/EditContact"
export const ApiContext = createContext();

function App() {
  const api = "https://boolean-uk-api-server.fly.dev/TeinSchoemaker";
  const contactUrl = `${api}/contact`;
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(contactUrl);
      const jsonData = await response.json();
      setContacts(jsonData.results || []);
    };
    fetchContacts();
  }, [contactUrl]);

  return (
    <ApiContext.Provider value={{ api, contacts, setContacts }}>
      <div className="container">
        <h1>Menu</h1>

        <div className="container-nav-main">
          <nav className="sidebar">
            <ul>
              <li>
                <Link to="/">Contact List</Link>
              </li>
              <li>
                <Link to="/addContact">Add new Contact</Link>
              </li>
            </ul>
          </nav>
          <main className="main">
            <Routes>
              <Route path="/" element={<Contacts contacts={contacts} />} />
              <Route path="/addContact" element={<AddContact />} />
              <Route path="/contacts/:id" element={<Profile />} />
              <Route path="/contacts/:id/edit" element={<EditContact />} />
            </Routes>
          </main>
        </div>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
