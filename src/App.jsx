import { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import ContactsList from "./components/Dashboard/ContactsList"
import ContactItem from "./components/Dashboard/ContactItem"
import CreateContact from "./components/Dashboard/CreateContact"
import UpdateContact from "./components/Dashboard/UpdateContact"

import { createContext } from "react"
const ContactContext = createContext()

function App() {
    const url = "https://boolean-uk-api-server.fly.dev/heskinstad/contact";
    const [contacts, setContacts] = useState([]);

    const fetchData = () => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((jsonData) => {
            setContacts(jsonData);
        })
    };

    useEffect(() => {
        fetchData();
      }, []);

    
    return (
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
            <ContactContext.Provider value={ {contacts, setContacts, fetchData} }>
                <Routes>
                    <Route path="/" element={<ContactsList />} />
                    <Route path="/contacts/:id" element={<ContactItem />} />
                    <Route path="/contacts/new" element={<CreateContact />} />
                    <Route path="/contacts/update/:id" element={<UpdateContact />} />
                </Routes>
            </ContactContext.Provider>
            </div>
        </div>
    );
}
export { ContactContext };
export default App;
