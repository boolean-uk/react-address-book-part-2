import './App.css';
import Dashboard from './components/Dashboard';
import EditContact from './components/EditContact';
import Form from './components/Form';
import ViewContact from './components/ViewContact';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [contacts, setContacts] = useState([]);


    // Get contacts
    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/giarreh/contact')
        .then(response => response.json())
        .then(data => setContacts(data));
        
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Dashboard contacts={contacts} setContacts={setContacts} />} />
            <Route path="/create" element={<Form contacts={contacts} setContacts={setContacts} />} />
            <Route path="/contact/:id" element={<ViewContact contacts={contacts}/>} />
            <Route path="/edit/:id" element={<EditContact contacts={contacts} setContacts={setContacts} />} />
        </Routes>
    );
}

export default App;
