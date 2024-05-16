// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/timsakande/contact');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const history = useHistory();

const handleContactSelect = (contact) => {
  history.push(`/contacts/${contact.id}`);
};

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleContactAdd = async (newContact) => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/timsakande/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
      const addedContact = await response.json();
      setContacts([...contacts, addedContact]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleContactUpdate = async (updatedContact) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/timsakande/contact/${updatedContact.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedContact),
      });
      const updated = await response.json();
      setContacts(contacts.map((contact) => (contact.id === updated.id ? updated : contact)));
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
        <Switch>
          <Route exact path="/">
            <ContactList
              contacts={contacts}
              searchTerm={searchTerm}
              onContactSelect={handleContactSelect}
            />
          </Route>
          <Route path="/contacts/new">
            <ContactForm onContactAdd={handleContactAdd} />
          </Route>
            <ContactDetails />
            <Route path="/contacts/:id" component={ContactDetails} />
          <Route path="/contacts/:id/edit">
            <ContactForm onContactUpdate={handleContactUpdate} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;