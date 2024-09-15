import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList.jsx';
import CreateContact from './components/CreateContact';
import ContactDetail from './components/ContactDetail.jsx';
import UpdateContact from './components/UpdateContact.jsx';
function App() {
    const [contacts, setContacts] = useState([]);

    const ApiURL = "https://boolean-api-server.fly.dev/OnealLane/contact";

    useEffect(() => {
        fetch(ApiURL)
        .then(res => res.json())
        .then(data => setContacts(data))
    }, []);


    const handleDeleteContact = (id) => {
        fetch(`${ApiURL}/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to delete contact');
                }
                setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
            })
            .catch(error => {
                console.error('Error deleting contact:', error); // Fix the console.error statement
            });
    }

    return (
        <main className='dashboard-layout'>
            <section>
                <h1>Menu</h1>
                <nav>
                    
                    <ul className='links'>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/contacts">Contact List</Link>
                        </li>
                        <li>
                        <Link to="/add">Add new contact</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <Routes>
                <Route path='/contacts' element={<ContactList contacts={contacts} onDelete={handleDeleteContact}/>}/>
                <Route path='/add' element={<CreateContact url={ApiURL}/>}/>
                <Route path='/contact/:id/*' element={<ContactDetail contacts={contacts}/>}/>
                <Route path='/contact/:id/update' element={<UpdateContact ApiURL={ApiURL}/>}/>
            </Routes>
        </main>
    );
}

export default App;
