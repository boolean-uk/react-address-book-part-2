import { useEffect, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import "./App.css";
import ContactsList from "./components/ContactsList";
import CreateContact from "./components/CreateContact";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/contact`)
        .then((response) => response.json())
        .then((data) => setContacts(data));
      setDataFetched(true);
    }
  }, [dataFetched]);

  return (
    <>
      <div className="app">
        <header>
          <h1>Menu</h1>
          <nav>
            <ul>
              <li>
                <Link to="/contacts-list">Contacts List</Link>
              </li>
              <li>
                <Link to="/create-contact">Add New Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/contacts-list" element={<ContactsList contacts={contacts} />} />
        <Route path="/create-contact" element={<CreateContact />} />
      </Routes>
    </>
  );
}
