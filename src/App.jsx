import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MenuList from "./components/MenuList/MenuList.jsx"
import ContactList from "./components/ContactList/ContactList.jsx"
import ContactDetails from "./components/ContactDetails/ContactDetails.jsx"
import CreateContact from "./components/CreateContact/CreateContact.jsx"
import { baseUrl } from './Utils/apiUtils.js';

const App = () => {
    const [contacts, setContacts] = useState([])


    const retrieveAllContacts = async () => {
        await fetch(baseUrl)
            .then((res) => res.json())
            .then((res) => setContacts([...res]))
    }

    const addToContacts = async (newContact) => {
        const request = {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(newContact)
          }

        await fetch(baseUrl, request)
        await retrieveAllContacts()
    }

    useEffect(() => {
        retrieveAllContacts()
    }, [])

    return (
        <>
        <MenuList />
        <Routes>
            <Route 
                path="/"
                element={<ContactList contacts={contacts} refreshContacts={retrieveAllContacts}/>}
            />
            <Route 
                path="/contacts/:id"
                element={<ContactDetails/>}
            />
            <Route 
                path="/contacts/new"
                element={<CreateContact addToContacts={addToContacts}/>}
            />
        </Routes>
        </>
    );
}

export default App;
