import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ContactsList from './components/ContactsList';
import ContactProfile from './components/ContactsProfile';
import AddContactForm from './components/CreateContactForm';

const GET_CONTACTS = "https://boolean-api-server.fly.dev/guro18/contact"

function App() {

    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(GET_CONTACTS)
        .then((response) => response.json())
        .then((responseData) => {
            const simplifiedData = responseData.map(person => ({
                firstName: person.firstName,
                lastName: person.lastName,
                city: person.city,
                street: person.street,
              }));
          setContacts(simplifiedData);
        });
      }, []);

      const handleAddContact = (newContact) => {
        setContacts(prevContacts => [...prevContacts, newContact]);
        navigate('/'); // Navigate back to the main app
      };

    return (
        <div className='App'>
        <header>
          <h1>ViewContactsPage</h1>
          <nav>
            <ul>
              <h2>Contacts</h2>
              <Link to={{ pathname: "/create"}}>Create Contact</Link>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="/" element={<ContactsList contacts = {contacts}/>}/>
        <Route path="/contacts/view" 
        element={<ContactProfile props = {contacts}/>}/>
        <Route path="/contacts/view/:id" element={<ContactProfile props = {contacts}/>}/>
        <Route path="/create" element={<AddContactForm onAddContact={handleAddContact} />}/>
        </Routes>
      </div>
    );
}

export default App;