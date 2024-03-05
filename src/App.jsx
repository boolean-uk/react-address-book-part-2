import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Menu from './components/Menu';
import CreateContact from './components/CreateContact';
import ContactDetails from './components/ContactDetails';

function App() {
    const [contacts, setContacts] = useState([])

    if(contacts === undefined) return <h3>Loading...</h3>

    return (
        <div className="app">
            <Menu />
            <Routes>
                <Route
                    path="/contactlist"
                    element={<ContactList contacts={contacts} setContacts={setContacts}/>}
                />
                <Route
                    path="/contact/create"
                    element={<CreateContact contacts={contacts} setContacts={setContacts}/>}
                />
                <Route
                    path="/contact/:id"
                    element={<ContactDetails contacts={contacts} />}
                />
                <Route
                    path="/"
                    element={<h1>Home</h1>}
                />
            </Routes>

        </div>
    );
}

export default App;
