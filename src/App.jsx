import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import AddContactForm from "./components/AddContactForm.jsx";
import ContactView from "./components/ContactView.jsx";
import ContactList from "./components/ContactList.jsx";
import React, {useEffect} from "react";

const GITHUB_USERNAME = "magnus195"
export const API_URL = `https://boolean-uk-api-server.fly.dev/${GITHUB_USERNAME}`;
export const ContactContext = React.createContext();

function App() {
    const [contacts, setContacts] = React.useState([]);

    useEffect(() => {
        fetch(`${API_URL}/contact`)
            .then(response => response.json())
            .then(data => setContacts(data))
    }, []);

    return (
        <>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/list">Contacts List</Link></li>
                    <li><Link to="/add">Add New Contact</Link></li>
                </ul>
            </div>
            <div>
                <ContactContext.Provider value={{contacts, setContacts}}>
                    <Routes>
                        <Route path="/" element={<p>Welcome!</p>}/>
                        <Route path="/view/:id" element={<ContactView/>}/>
                        <Route path="/add" element={<AddContactForm/>}/>
                        <Route path="/list" element={<ContactList/>}/>
                    </Routes>
                </ContactContext.Provider>
            </div>
        </>
    );
}

export default App;
