import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

export const ContactContext = createContext();

function App() {
    const [contactList, setContactList] = useState([]);
    const url = "https://boolean-uk-api-server.fly.dev/mathiashandeland/contact";

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch(url); 
            const data = await response.json();
            setContactList(data);
        };
        fetchContacts();
    }, []);

  return (
    <ContactContext.Provider value={{ contactList, setContactList, url }}>
        <div className="app-container">
            <div className="sidebar">
            <h2><strong>Menu</strong></h2>
            <ul>
                <li><Link to="/contacts">Contacts List</Link></li>
                <li><Link to="/add">Add New Contact</Link></li>
            </ul>
            </div>
            <div className="main-content">
            <Routes>
                <Route path="/contacts" element={<ContactList />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/contact/:id" element={<ContactDetails />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
            </div>
        </div>
    </ContactContext.Provider>
  );
}

export default App;
