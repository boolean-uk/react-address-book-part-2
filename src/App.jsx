import {
    Route,
    Routes,
    Link
  } from "react-router-dom";

import './App.css';
import { ContactList } from "./components/Contacts/ContactList";
import { ContactForm } from "./components/Contacts/ContactForm";
import { useEffect, useState } from "react";
import { ContactDetails } from "./components/Contacts/ContactDetails";

function App() {

    const [contacts, setContacts] = useState([])

    
    const url = "https://boolean-api-server.fly.dev/Sebank/contact";

    useEffect(() => {

        const updateContacts = async () => {
            await fetch("https://boolean-api-server.fly.dev/Sebank/contact")
            .then(res => res.json()).then(setContacts);
        }

        updateContacts();

    }, [])


    return (
        <>  
            <div className="split">
            <nav>

            <h1>Menu</h1>
            <p>
                <Link to="/">
                    Contact List
                </Link>
            </p>
            <p>
                <Link to="/addContact">
                    Add new contact
                </Link>
            </p>
            </nav>
            <Routes>
                <Route path="/" element={<ContactList contacts={contacts}/>}/>
                <Route path="/addContact"  element={<ContactForm setContacts={setContacts} url={url}/>}/>
                <Route path="/edit/:id"  element={<ContactForm setContacts={setContacts} url={url} contacts={contacts}/>}/>
                <Route path="/view/:id" element={<ContactDetails setContacts={setContacts} contacts={contacts} url = {url}/>}/>
            </Routes>
            </div>
        </>
    );
}

export default App;
