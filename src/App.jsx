import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContactView from './components/ContactView';
import axios from 'axios';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';

const ContactContext = createContext(null)

function App() {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://boolean-uk-api-server.fly.dev/Ic4rus90/contact')
        .then(res => {
            const persons = res.data;
            setContacts(persons)
        })
    }, [])
    
    const addContact = (contact) => {
        setContacts([...contacts, contact])
    }

    const updateContact = (updatedContact) => {
        setContacts(prevContacts => prevContacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
          ));
        };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
    }

    return (
        <ContactContext.Provider value={{contacts, addContact, updateContact, deleteContact}}>
            <header>
                <button onClick={() => navigate("/create-contact")}> Create a contact </button>
                <button onClick={() => navigate("/")}>Contact List </button>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={<Dashboard/>}
                />
                <Route
                    path="/contact/:id"
                    element={<ContactView/>}
                />
                <Route
                    path="/create-contact"
                    element={<CreateContact/>}
                    />
                <Route
                    path="/edit-contact/:id"
                    element={<EditContact/>}
                    />
            </Routes>
        </ContactContext.Provider>
    );
}

export { App, ContactContext };
