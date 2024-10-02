import "./App.css";
import { useEffect, useState, createContext } from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import ContactsList from "./components/ContactsList";
import ContactPage from "./components/ContactPage";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const ContactContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/badde00/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);


  return (
    <ContactContext.Provider value={{contacts, setContacts}}>
      <header>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">Contact List</Link>
          <Link to="/add">Add</Link>
        </nav>
      </header>
      <main>

      </main>
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/view/:id" element={<ContactPage />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </ContactContext.Provider>
  )
}

export { App, ContactContext };
