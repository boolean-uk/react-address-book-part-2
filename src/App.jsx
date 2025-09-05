import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import './App.css';
import ContactProfile from './components/ContactProfile';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';

export const ContactContext = createContext();

function App() {

    const [contacts, setContacts] = useState([]);

    const contact_api = "https://boolean-uk-api-server.fly.dev/elisabethroys/contact"

    useEffect(() =>
    {
        const fetchContacts = async () => {
            const response = await fetch(contact_api);
            const data = await response.json();
            setContacts(data);
        }

        fetchContacts();
    }, [contacts]);

    return (
        <main>
            <ContactContext.Provider value={{contacts, contact_api}}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile/:id" element={<ContactProfile />}/>
                    <Route path="/create-contact" element={<CreateContact />}/>
                    <Route path="/profile/:id/edit" element={<UpdateContact />}/>
                </Routes>
            </ContactContext.Provider>
        </main>
    );
}

export default App;
