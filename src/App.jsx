import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import PersonProfile from './components/PersonProfile';
import ContactForm from './components/ContactForm';
import { createContext, useEffect, useState } from 'react';
export const ContactContext = createContext();

function App() {
    const url = "https://boolean-uk-api-server.fly.dev/PandersPanda/contact";
    const [contacts, setContacts] = useState([])
    
    useEffect(() => {
        updateContacts();
      }, [contacts, setContacts])
    
    const updateContacts = () => {
        const fetchdata = async () => {
            const response = await fetch(url)
            const jsonData = await response.json();
            setContacts(jsonData)
        };
        fetchdata();
    }

    return (
      <>
        <header>
            <h1>Your contacts</h1>
            <nav>
                <h2><Link to="/dashboard"> Contact List </Link></h2>
                <h2><Link to="/add">Add New Contact</Link></h2>
            </nav>
            <ContactContext.Provider
                value={{ contacts: contacts, updateContacts: updateContacts }}
            >
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/view/:id" element={<PersonProfile />}/>
                <Route path="/add" element={<ContactForm contacts={contacts}/>} />
            </Routes>
            </ContactContext.Provider>
        </header>
      </>
    );
}

export default App;
