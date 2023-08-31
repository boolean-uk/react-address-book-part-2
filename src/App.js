import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./components/Home.js"
import ContactList from "./components/ContactList"
import ContactForm from "./components/ContactForm.js"
import ContactDisplay from "./components/ContactDisplay.js"

function App() {
    const [contacts, setContacts] = useState([])

    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json()
        setContacts(json)
        }
    
        useEffect(() => {
          getData()
        }, [])

    return (

        <div className='content'>
            <Home />
            <Routes>
                <Route path="/" element={
                        <ContactList contacts={contacts} />
                    }
                />
                <Route path="/contact-list" element={
                        <ContactList contacts={contacts} />
                    }
                />
                <Route path="/new-contact" element={
                        <ContactForm contacts={contacts} setContacts={setContacts} />
                    }
                />
                <Route path="/contact-list/:id" element={
                        <ContactDisplay />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
