import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Desktop from './pages/Desktop';
import { useEffect, useState } from 'react';
import CreateContact from './pages/CreateContact';
import ViewContact from './pages/ViewContact';
import UpdateContact from './pages/UpdateContact';

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = () => {
        fetch("https://boolean-api-server.fly.dev/AGatland/contact")
        .then(res => res.json()).then(setContacts)
    }

    const createNewContact = (contact) => {
        fetch("https://boolean-api-server.fly.dev/AGatland/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(contact),
      }).then(res => {
        if (res.ok) {
            fetchContacts()
        }
      }).catch(error => console.error("Problem with creating contact: ", error))
    }

    const deleteContact = (id) => {
        fetch(`https://boolean-api-server.fly.dev/AGatland/contact/${id}`, {
        method: "DELETE"}).then(res => {
            if (res.ok) {
                fetchContacts()
            }
          }).catch(error => console.error("Problem with deleting contact: ", error))
    }

    const updateContact = (contact) => {
        fetch(`https://boolean-api-server.fly.dev/AGatland/contact/${contact.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(contact),
      }).then(res => {
        if (res.ok) {
            fetchContacts()
        }
      }).catch(error => console.error("Problem with updating contact: ", error))
    }

    return (
        <div className="app-container">
            <div className="app-menu">
                <h1>Menu</h1>
                <ul>
                    <li><Link to="/">Contact List</Link></li>
                    <li><Link to="/add">Add New Contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Desktop contacts={contacts} />} />
                <Route path="/add" element={<CreateContact createNewContact={createNewContact} />} />
                <Route path="/view/:id" element={<ViewContact contacts={contacts} deleteContact={deleteContact} />} />
                <Route path="/update/:id" element={<UpdateContact contacts={contacts} updateContact={updateContact} />} />
            </Routes>
        </div>
    );
}

export default App;
