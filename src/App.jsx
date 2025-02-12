import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import { useState, useEffect } from 'react';
import SearchContact from './components/SearchContact';

function App() {
    const [contacts, setContacts] = useState([]);
    const [filterString, setFilterString] = useState('');

    const fetchContacts = async () => {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/josteinlaa/contact');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        refreshContacts();
    }, []);

    const refreshContacts = () => {
        fetchContacts().then(data => setContacts(data));
    };

    const filterFunction = (contact) => {
        return contact.firstName.toLowerCase().includes(filterString.toLowerCase());
    };

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Contacts List</Link>
                    </li>
                    <li>
                        <Link to="/addContact">Add New Contact</Link>
                    </li>
                </ul>
            </nav>
            <SearchContact></SearchContact>
            <br></br>
            <h2>Filter Contact List:</h2>
            <input
                type="text"
                placeholder="Filter contacts"
                value={filterString}
                onChange={(e) => setFilterString(e.target.value)}
            />

            <Routes>
                <Route
                    path="/"
                    element={<Contacts contacts={contacts} filterFunction={filterFunction} />}
                />
                <Route
                    path="/addContact"
                    element={<ContactForm refreshContacts={refreshContacts} />}
                />
                <Route
                    path="/contact/:id"
                    element={<ContactInfo contacts={contacts} refreshContacts={refreshContacts} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
