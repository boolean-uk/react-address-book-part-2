import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import { createContext, useEffect, useState } from 'react';
import ViewContact from './components/ViewContact';
import CreateContact from './components/CreateContact';

const ContactsContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/Marcus0410/contact")
            .then((res) => res.json())
            .then((data) => setContacts(data))
    }, [contacts])

    return (
        <>
            <ContactsContext.Provider value={{ contacts, setContacts }}>
                <header>
                    <h2>Menu</h2>
                    <nav>
                        <ul>
                            <li><Link to="/">Contact list</Link></li>
                            <li><Link to="/create">Add new contact</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/create' element={<CreateContact />} />
                    <Route path='/view/:id' element={<ViewContact />} />
                </Routes>
            </ContactsContext.Provider>
        </>
    );
}

export { ContactsContext, App };
