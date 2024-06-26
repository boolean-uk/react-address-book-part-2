import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import AddContactForm from './components/AddContactForm'
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/Alakowe19/contact');
      if (!response.ok) {
        throw new Error('Link error?');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setError('Error fetching contacts. Please try again later.');
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/Alakowe19/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newContact = await response.json();
      setContacts([...contacts, newContact]);
    } catch (error) {
      console.error('Error adding contact:', error);
      setError('Error adding contact. Please try again later.');
    }
  };

  const fetchContact = async (contactId) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/Alakowe19/contact/${contactId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSelectedContact(data);
    } catch (error) {
      console.error('Error fetching contact details:', error);
      setError('Error fetching contact details. Please try again later.');
    }
  };

  const closeContactDetails = () => {
    setSelectedContact(null);
  };

  return (
    <Router>
      <div className="App">
        <h1>Contact Menu</h1>
        <nav>
          <Link to="/">Contacts List</Link>
          <Link to="/add">Add Contact</Link>
        </nav>

        {error && <p className="error-message">{error}</p>}

        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} viewContactDetails={fetchContact} />}
          />
          <Route path="/add" element={<AddContactForm addContact={addContact} />} />
          <Route
            path="/contact/:id"
            element={
              <ContactDetails
                contact={selectedContact}
                onClose={closeContactDetails}
                fetchContact={fetchContact}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App
