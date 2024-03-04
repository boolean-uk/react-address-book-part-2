import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ViewContacts } from './components/View/ViewContacts';
import { CreateContacts } from './components/Create/CreateContact';

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

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <nav className="menu-header">
                        <ul>
                            <li><Link to="/view">View Contacts</Link></li>
                            <li><Link to="/create">Create Contact</Link></li>
                        </ul>
                    </nav>
                } />
                <Route path="/view" element={
                    <ViewContacts
                        contacts={contacts}
                    />}
                />
                <Route path="/view/:id" element={
                    <ViewContacts
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

export default App;
