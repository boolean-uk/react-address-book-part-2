import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import ContactPage from './components/ContactPage';
import CreateNewContact from './components/CreateNewContact';

export default function App() {

    const [contacts, setContacts] = useState([])

    useEffect(() =>{
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact`)
        .then(res => res.json())
        .then((data) => setContacts(data))
    }, [])

    return (
        <div className='App'>
            <header>
                <h1>Contacts</h1>
                <nav>
                    <ul>
                        <li><Link to="/contacts">Contacts List</Link></li>
                        <li><Link to={`/create/${contacts.length+1}`}>Create New Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/contacts" element={<ContactsList contacts={contacts}/>}/>
                <Route path="/contacts/:id" element={<ContactPage contacts={contacts}/>}/>
                <Route path="/create/:id" element={<CreateNewContact setContacts={setContacts}/>} />
            </Routes>
        </div>
    );
}
