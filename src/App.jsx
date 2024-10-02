import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import ContactDetail from './components/ContactDetail';
import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';
const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/sebgro98/contact')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    fetch(`https://boolean-uk-api-server.fly.dev/sebgro98/contact/${id}`, { method: 'DELETE' })
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== id));
      });
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact))
    );
  };

  return (
    <>
    <header>
      <nav>
        <ul>
        <li> <Link to="/">Dashboard</Link> </li>
       <li> <Link to="/create">Create a Contact</Link> </li>
        </ul>
      </nav>
      </header>
      <Routes>
        <Route exact path="/" element={ <Dashboard contacts={contacts} deleteContact={deleteContact} /> } />
        <Route path="/contacts/:id" element={ <ContactDetail contacts={contacts} /> } />
        <Route path="/create" element={ <CreateContact addContact={addContact} /> } />
        <Route path="/edit/:id" element={ <EditContact contacts={contacts} updateContact={updateContact} />} />
      </Routes>
      </>
  );
};

export default App;
