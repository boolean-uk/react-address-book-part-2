import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Menu from './components/Menu';
import CreateContact from './components/CreateContact';

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/nora-hansen/contact")
            .then(response => response.json())
            .then(setContacts)
    }, [])

    return (
        <div className="app">
            <Menu />
            <Routes>
                <Route
                    path="/contactlist"
                    element={<ContactList contacts={contacts} />}
                />
                <Route
                    path="/contact/create"
                    element={<CreateContact contacts={contacts} />}
                />
                <Route
                    path="/"
                    element={<></>}
                />
            </Routes>

        </div>
    );
}

export default App;
