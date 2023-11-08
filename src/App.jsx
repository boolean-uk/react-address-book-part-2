import { Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import ContactItem from './components/ContactItem'

import './App.css';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';

const api = 'https://boolean-api-server.fly.dev/radio58/contact'

const INITIAL_STATE =  {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: 0,
    longitude: 0
}

function App() {
    const [ contactList, setContacts ] = useState(INITIAL_STATE)

    const getContacts = () => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setContacts(data)
            })
    }

    useEffect(getContacts, [])

    console.log(contactList)

    return (
        <>
        <Menu/>
        <Routes>
            <Route
            path="/"
            element={<ContactItem/>}
            />
            <Route 
            path="/Contacts"
            element={<Contacts/>}
            />
            <Route
            path="/AddContact"
            element={<AddContact/>}
            />
        </Routes>
        
        </>
    );
}

export default App;
