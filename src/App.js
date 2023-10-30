import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import AddressBook from './components/AddressBook';
import ContactsList from "./components/ContactsList"
import CreateContact from "./components/CreateContact.js"
import ViewContactDetails from './components/ViewContactDetails';

function App() {
    const [contacts, setContacts] = useState([])

    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const jsonData = await response.json()
        setContacts(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='content'>
            <AddressBook />
            <Routes>
                <Route path="/" element={<ContactsList contacts={contacts} />} />
                <Route path="/contact-list" element={<ContactsList contacts={contacts} />} />
                <Route path="/new-contact" element={<CreateContact setContacts={setContacts} contacts={contacts} />} />
                <Route path="/contact-list/:id" element={<ViewContactDetails />} />
            </Routes>
        </div>
    );
}

export default App;