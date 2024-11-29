import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./css/App.css";
import ContactsList from "./components/ContactsList";
import CreateContact from "./components/CreateContact";
import Dashboard from "./components/Dashboard";
import PersonProfile from "./components/PersonProfile";

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
    <div className="container">
      <div className="nav">
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
      <div className="content">
        <Routes>
          
          <Route path="/contacts-list" element={<Dashboard contacts={contacts} setContacts={setContacts} setDataFetched={setDataFetched} />} />
          <Route path="/view/:id" element={<PersonProfile contacts={contacts} />} />
          <Route path="/create-contact" element={<CreateContact setDataFetched={setDataFetched} />} />
        </Routes>
      </div>
    </div>
  );
}
