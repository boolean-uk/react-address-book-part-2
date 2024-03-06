import { useState, useEffect } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import ContactProfile from './components/ContactProfile';
function App() {
const [contacts, setContacts] = useState([])

useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/litsas7/contact")
      .then((response) => response.json())
      .then((item) => setContacts(item));
  }, []);

return (
    <header>
        <h1>Menu</h1>
        <nav>
            <ul>
                <li>
                    <p><Link to ="/ContactsList">Contacts List</Link> </p>
                    <p><Link to = "/AddNewContact">Add New Contact</Link> </p>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route
                path="/ContactsList"
                element={<ContactsList contacts={contacts}/>}
            />
            <Route path="/view/:id" element={<ContactProfile contacts={contacts}/>} />
        </Routes>
    </header>
        
)}

export default App;
