import './App.css';

import { useState, createContext, useEffect } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm';
import DashBoard from './components/DashBoard/DashBoard';
import Index from './components/Index';
import ContactView from './components/ContactView/ContactView';

export const AppContext = createContext()

function App() {
    const [newContact, setNewContact] = useState(null);
    const [deleteContactId, setDeleteContactId] = useState(null);
    const [editedContactData, setEditedContactData] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [contactsInitialized, setContactsInitialized] = useState(false);

    useEffect(() => {
        if(contactsInitialized) return;
        const fetchData = async() => {
            fetch("https://boolean-uk-api-server.fly.dev/lr222gw/contact")
                .then(res => res.json())
                .then(dat => {
                    console.log(dat);
                    setContacts(dat);
                    setContactsInitialized(true);
                })
        };
        fetchData();
    },
    [contacts]
    );

    useEffect(() => {
        if(newContact == null) return;
        const addContact = async() => {

            fetch("https://boolean-uk-api-server.fly.dev/lr222gw/contact",
                {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body : JSON.stringify(newContact)
                }
                )
                .then(res => res.json())
                .then((dat) => {
                    console.log(dat);
                    setContactsInitialized(false);
                    setNewContact(null);
                    setContacts([...contacts, dat])
                })
        };
        addContact();
    },
    [newContact]
    );

    useEffect(() => {
        if(deleteContactId == null) return;
        const addContact = async() => {

            fetch(`https://boolean-uk-api-server.fly.dev/lr222gw/contact/${deleteContactId}`,
                {
                    method:"DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                )
                .then(res => res.json())
                .then((dat) => {
                    console.log(dat);
                    setContacts([...contacts.filter((x)=> x.id != deleteContactId)])
                    setContactsInitialized(false);
                    setDeleteContactId(null)
                })
        };
        addContact();
    },
    [deleteContactId]
    );

    useEffect(() => {
        if(editedContactData == null) return;
        const addContact = async() => {

            fetch(`https://boolean-uk-api-server.fly.dev/lr222gw/contact/${editedContactData.id}`,
                {
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(editedContactData)
                }
                )
                .then(res => res.json())
                .then((dat) => {
                    console.log(dat);
                    setContacts([...contacts.filter((x)=> x.id != editedContactData.id)])
                    setContactsInitialized(false);
                    setEditedContactData(null)
                })
        };
        addContact();
    },
    [editedContactData]
    );

    const addContact = (_newContact) => {
        setNewContact(_newContact);
    };

    const deleteContact = (id) => {
        setDeleteContactId(id)
    };

    const editContact = (id, editedContact) => {
        setEditedContactData(editedContact)
    };

    return (
        <AppContext.Provider value={{contacts, addContact, deleteContact, editContact}}>

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/new'}>New Contact</Link></li>
            </ul>
            <DashBoard />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/contact/:id' element={<ContactView />} />
                <Route path='/contact/:id/edit' element={<ContactForm  />} />
                <Route path='/new' element={<ContactForm />} />
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
