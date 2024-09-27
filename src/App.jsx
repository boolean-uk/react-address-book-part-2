import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navigation from './components/navigation';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import ContactPage from './components/contactPage';

function App() {
    const [ contacts, setContacts ] = useState([]);

    return (
        <>
        <header>
            <h1>Address Book</h1>
            <Navigation/>
        </header>
        <main>
            <Routes>
                <Route
                path="/"
                element={<p>Dashboard</p>}
                />
                <Route 
                path="/contacts"
                element={<ContactList contacts={contacts} setContacts={setContacts}/>}
                />
                <Route
                path="/contacts/:id"
                element={<ContactPage/>}
                />
                <Route
                path="/add-contact"
                element={<ContactForm contacts={contacts} setContacts={setContacts}/>}
                />
            </Routes>
        </main>
        </>
    );
}

export default App;
