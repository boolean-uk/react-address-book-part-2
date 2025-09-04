import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import ContactsList from './components/ContactList';
import CreateContact from './components/CreateContact';
import ContactProfile from './components/ContactProfile';

export default function App() {
    const url = "https://boolean-uk-api-server.fly.dev/lindadqd/contact"
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
            const response = await fetch(url)
            const jsonData = await response.json()
            console.log("jsonData:" + jsonData)
            setContacts(jsonData)
    }
    console.log(contacts)
    return (
    <div className="container">
      <h1>Contacts Book</h1>

      <div className="container-nav-main">
        <nav className="sidebar">
          <Navigation />
        </nav>
        <main className="main">
            <Routes>
            <Route path="/" element={<ContactsList contacts = {contacts} />} />
            <Route path="/newContact" 
            element={<CreateContact url = {url} fetchData = {fetchData}/>}/>
            <Route path="/contact/:id" 
            element={<ContactProfile contacts={contacts}/>}/>
            </Routes>
        </main>
        </div>
        </div>
    )
}