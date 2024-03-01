import './App.css';
import React, { useEffect, useState } from 'react';
import { getRequest } from './utils/requests';
import { Link, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactInfo from './components/ContactInfo';
import { Contact } from './types';

function App() {
    const [contacts, setContacts] = useState<Array<Contact>>([]);

    useEffect(() => {
        console.log('Fetching contacts')
        getRequest('https://boolean-api-server.fly.dev/solido7/contact').then((data) => {
            setContacts(data);
        });
    }, []);


    return (
        <div style={{display: 'flex'}}>
            <header style={{width: '300px'}}>
                <h2>Menu</h2>
                <nav style={{display: 'flex', flexDirection: 'column'}}>
                    <Link to="/">Contact List</Link>
                    <Link to="/add">Add New Contact</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<ContactList contacts={contacts} />} />
                <Route path="/add" element={<ContactForm setContacts={setContacts} />} />
                <Route path="/:id" element={<ContactInfo setContacts={setContacts} contacts={contacts} />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
