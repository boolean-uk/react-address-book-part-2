import { useState, useEffect } from "react"

import './App.css';
import DashBoard from "./components/DashBoard";


function App() {

    const [contacts, setContacts] = useState([]);

    const BASE_URL = "https://boolean-api-server.fly.dev/joannabuuma1/contact"
    function fetchContacts() {
        fetch(BASE_URL)
            .then(async response => {
                let data = await response.json()
                setContacts(data)
            })
    }
    useEffect(fetchContacts, [])

    function fetchDeleteContact(id) {
        fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        }).then(async response => {
            if (response.status == 200) { /* empty */ }
        })
    }

    function fetchUpdateContact(contact) {
        fetch(`${BASE_URL}/${contact.id}`, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: { "Content-Type": "application/json" }
        }).then(async response => {
            if (response.status == 200) { /* empty */ }
        })
    }

    function fetchCreateContact(newContact) {
        fetch(`${BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: { "Content-Type": "application/json" }
        }).then(async response => {
            console.log(200)
            if (response.status == 200) { /* empty */ }
        })
    }

    return <>
        <div className="app">
            <DashBoard contacts={contacts} fetchContacts={fetchContacts} createContact={fetchCreateContact} deleteContact={fetchDeleteContact} updateContact={fetchUpdateContact} />
        </div>
    </>
}

export default App
