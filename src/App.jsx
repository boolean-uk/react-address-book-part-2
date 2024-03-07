import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ContactList from './components/ContactList'
import NewContact from './components/NewContactForm'

import './App.css';

function App() {
    const [contacts, setContacts] = useState("")
    const [createContact, setCreateContact] = useState("")

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/hkyksk/contact")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results)
            setContacts(data.results)
          })    
      }, [])


    return (
        <Router> 
            <div>
              <h2>Menu</h2>
              <nav>
                <li><Link to="/contact-list">Contact List</Link></li>
                <li><Link to="/create-contact">Add New Contact</Link></li>
              </nav>
              <Routes>
                  <Route path="/contact-list" element={<ContactList setContacts={setContacts} />} />
                  <Route path="/create-contact" element={<NewContact />} />
              </Routes>
            </div>
        </Router>
    )
}

export default App
