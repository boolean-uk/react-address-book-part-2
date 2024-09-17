import './App.css'

import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ViewContacts } from './components/View/ViewContacts';
import { CreateContacts } from './components/Create/CreateContact';
import { ContactDetail } from './components/View/ContactDetail';

function App() {

    const [contacts, setContacts] = useState([])
    const address = 'https://boolean-api-server.fly.dev/MartinJohannessen/contact'

    useEffect(() => {
        const fetchData = () => {
            fetch(address)
                .then(res => res.json())
                .then(res => setContacts(res))
                .catch(error => console.error("Fetching failed:", error));
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(contacts)

    if (contacts)
    {
        return (
            <>
                <nav className="menu-header">
                    <ul>
                        <div><Link to="/">View Contacts</Link></div>
                        <div><Link to="/create">Create Contact</Link></div>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={
                        <ViewContacts
                            contacts={contacts}
                        />}
                    />
                    <Route path="/:id" element={
                        <ContactDetail
                            contacts={contacts}
                            setContacts={setContacts}
                        />}
                    />
                    <Route path="/create" element={
                        <CreateContacts
                            setContacts={setContacts}
                        />}
                    />
                </Routes>
            </>
        );
    }
}

export default App;
