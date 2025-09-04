import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { createContext } from 'react';
import ContactProfile from './components/ContactProfile';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';

export const ContactContext = createContext()

export default function App() {
    const [contacts, setContacts] = useState([])

    const base_url = 'https://boolean-uk-api-server.fly.dev';
    const contact_url = base_url + '/Jonnashell/contact'

    // Get contacts
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(contact_url);
            const jsonData = await response.json();
            setContacts(jsonData);
        }
        fetchData();
    }, []);

    console.log('url: ', contact_url)
    console.log('contacts: ', contacts)

    return (
        <>
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <ContactContext.Provider value={ { contacts, setContacts, base_url, contact_url } }>
                <Routes>
                    <Route path="/" element={<p>Welcome</p>} />
                    <Route path="/dashboard" element={contacts.length ? <Dashboard /> : <p>Loading...</p>} />
                    <Route path="/contact/:id" element={<ContactProfile />} />
                    <Route path="/contact/create" element={<CreateContact />} />
                    <Route path="contact/update/:id" element={<UpdateContact />} />
                </Routes>
            </ContactContext.Provider>
        </>
    );
}