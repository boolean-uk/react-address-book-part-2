import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Nav from "./components/Nav"
import Home from "./components/Home"
import ContactList from "./components/ContactList"
import ContactForm from "./components/ContactForm"
import SingleContact from "./components/SingleContact"

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setContacts(json));
    }, [])

    return (

        <div className='content-holder'>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home

                        />
                    }
                />

                <Route
                    path="/contact-list"
                    element={
                        <ContactList
                            contacts={contacts}
                        />
                    }
                />

                <Route
                    path="/new-contact"
                    element={
                        <ContactForm
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    }
                />

                <Route
                    path="/contact-list/:id"
                    element={
                        <SingleContact

                        />
                    }
                />
            </Routes>
        </div>




    );
}

export default App;
