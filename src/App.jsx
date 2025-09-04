import { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import ContactsList from "./components/Dashboard/ContactList"
import ContactProfile from './components/Dashboard/ContactProfile';
import AddContact from './components/AddContact/AddForm';

function App() {
    const url = "https://boolean-uk-api-server.fly.dev/moueedAli/contact";
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(data => data.json())
        .then(data => setContacts(data))
    }, [])

    console.log(contacts)

    return (
        <>
        <div className="app">
            <div className="header">
                <h1>Address book</h1>
            </div>

            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/">Contact List</Link>
                    </li>
                    <li>
                        <Link to="/contacts/new">Create Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="content">
            <Routes>
                <Route path="/" element={<ContactsList contacts={contacts} />} />
                 <Route path='/contact/:id' element={ <ContactProfile contacts={contacts}/> } />
                <Route path="/contacts/new" element={<AddContact />} />
            </Routes>
            </div>
        </div>
        </>
    );
}

export default App;