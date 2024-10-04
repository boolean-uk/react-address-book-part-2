/* eslint-disable no-unused-vars */

import { useState, useEffect, createContext} from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import CreateContactForm from './components/CreateContactForm';
import EditContactForm from './components/EditContactForm';
import './App.css';
export const ContactContext = createContext();

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://boolean-uk-api-server.fly.dev/siljegja/contact');
            const jsonData = await response.json();
            setContacts(jsonData)
        };
        fetchData();
    }, [])

    return (
        <ContactContext.Provider value={{contacts, setContacts}}>
            <header className='dashboard-layout'>
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/contacts">Contact List</Link>
                        </li>
                        <li>
                            <Link to="/create">Add new contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/contacts" element={<ContactList />} />
                <Route path="/contacts/:id" element={<ContactDetails />} />
                <Route path="/create" element={<CreateContactForm />} />
                <Route path="/edit/:id" element={<EditContactForm />} />
            </Routes>
        </ContactContext.Provider>
    )
}

export default App;
