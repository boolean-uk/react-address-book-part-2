import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import MenuList from "./components/MenuList/MenuList.jsx"
import ContactList from "./components/ContactList/ContactList.jsx"
import ContactDetails from "./components/ContactDetails/ContactDetails.jsx"
import CreateContact from "./components/CreateContact/CreateContact.jsx"
import { baseUrl } from './Utils/apiUtils.js';

const App = () => {
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()

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

    const editContact = async (editedContact, id) => {
        const request = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editedContact)
        }
        await fetch(baseUrl + "/" + id, request)
        await retrieveAllContacts()
        // Navigate back to contacts details ("/contacts/:id")
        navigate(`/contacts/${id}`)
    }

    useEffect(() => {
        retrieveAllContacts()
    }, [])

    return (
        <>
        <MenuList amount={contacts.length}/>
        <Routes>
            <Route 
                path="/"
                element={<Navigate to="/contacts/" replace={true} />}
            />
            <Route 
                path="/contacts/"
                element={<ContactList contacts={contacts} refreshContacts={retrieveAllContacts}/>}
            />
            <Route 
                path="/contacts/:id"
                element={<ContactDetails refreshContacts={retrieveAllContacts}/>}
            />
            <Route 
                path="/contacts/new"
                element={<CreateContact addToContacts={addToContacts}/>}
            />
            <Route 
                path="/contacts/edit/:id"
                element={<CreateContact addToContacts={editContact} />}
            />
        </Routes>
        </>
    );
}

export default App;
