// App.jsx
import { useEffect, useState } from 'react'
import './App.css'
import { Link, Routes, Route } from "react-router-dom"

import ContactList from './pages/ContactList'
import AddContact from './pages/ContactForms/AddContact'
import EditContact from './pages/ContactForms/EditContact'
import ViewContact from './pages/ContactForms/ViewContact'

function App() {
    const [contacts, setContacts] = useState([])

    // GET
    useEffect(() => {
        getContacts();
    }, [])

    function getContacts() {
        fetch("https://boolean-api-server.fly.dev/Hjaldrgud/contact")
            .then((response) => response.json())
            .then((data) => setContacts(data))
    }

    // POST
    const addContact = async (newContact) => {
        try {
            const response = await fetch("https://boolean-api-server.fly.dev/Hjaldrgud/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newContact)
            });

            if (response.ok) {
                // If the request is successful, update the contacts list
                getContacts(); // Reload contacts after adding
                return true;
            } else {
                // Handle errors
                console.error("Failed to add contact");
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    // PUT (Update)
    const updateContact = async (contactId, updatedContact) => {
        try {
            const response = await fetch(`https://boolean-api-server.fly.dev/Hjaldrgud/contact/${contactId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedContact)
            });

            if (response.ok) {
                // If the request is successful, update the contact in the state
                getContacts(); // Reload contacts after updating
                return true;
            } else {
                // Handle errors
                console.error("Failed to update contact");
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    // DELETE
    const deleteContact = async (contactId) => {
        try {
            const response = await fetch(`https://boolean-api-server.fly.dev/Hjaldrgud/contact/${contactId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                // If deletion is successful, remove the contact from the state
                setContacts(contacts.filter(c => c.id !== contactId));
                return true;
            } else {
                // Handle errors
                console.error("Failed to delete contact");
                return false;
            }
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    return (
        <div className="container">
            <header>
                <h1>Contact list app</h1>
                <nav>
                    <ul>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/addcontact">Add Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />
            <div className="routes-container">
                <Routes>
                    <Route
                        path="/"
                        element={<ContactList contacts={contacts} deleteContact={deleteContact} />}
                    />
                    <Route
                        path="/view/:id"
                        element={<ViewContact contacts={contacts} deleteContact={deleteContact} />}
                    />
                    <Route
                        path="/addcontact"
                        element={<AddContact addContact={addContact} contacts={contacts} setContacts={setContacts} />}
                    />
                    <Route
                        path="/edit/:id"
                        element={<EditContact contacts={contacts} updateContact={updateContact} />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App
