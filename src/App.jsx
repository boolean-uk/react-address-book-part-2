import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import ContactDetails from "./components/ContactDetails";
import CreateContactForm from "./components/CreateContactForm";
import EditContact from "./components/EditContact";


export default function App() {
    const [contacts, setContacts] = useState([])  


    useEffect(() => {
        const fetchData = () => {
          fetch("https://boolean-api-server.fly.dev/hassanhussa1n/contact")
          .then(response => response.json())
          .then(data => {
            setContacts(data)
          })
        }
    
        console.log(contacts)
        fetchData();
      }, []);

      const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
      };

      const deleteContact = (contactId) => {
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
      };

      const editPerson = (id, updatedContact) => {
        setContacts((prevContacts) => {
          const updatedContacts = prevContacts.map((contact) =>
            contact.id === id ? updatedContact : contact
          );
          return updatedContacts;
        });
      };

      return (



            <>
            <header>
              <h1>Contacts</h1>
              <nav>
                <ul>
                  <li><Link to="/">Dashboard</Link></li>
                 
                </ul>
              </nav>
            </header>
            <Routes>
        <Route
          path="/"
          element={<Dashboard contacts={contacts} onDeleteContact={deleteContact}/>}
        />
        <Route
          path="/contact/:id"
          element={<ContactDetails contacts={contacts}/>}
        />
        <Route
          path="/create-contact"
          element={<CreateContactForm addContact={addContact}/>}
        />
        <Route path="/edit-contact/:id" element={<EditContact onEdit={editPerson} contacts={contacts}/>} />
      </Routes>
          </>
            
        
          )

      

}