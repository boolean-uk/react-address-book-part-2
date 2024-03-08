//index.jsx
import { useState, useEffect } from 'react';
import ContactList from './Users/ContactList';
import NewContactForm from './NewUsers/NewContactForm';
import ContactListItem from './Users/ContactListItem';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Index() {
  const [contacts, setContacts] = useState();
  const [createContact, setCreateContact] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateContact(prevCreateContact => ({
      ...prevCreateContact,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://boolean-api-server.fly.dev/hkyksk/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createContact)
    })
      .then(response => {
        if (response.ok) {
          setCreateContact({
            firstName: '',
            lastName: '',
            street: '',
            city: ''
          });
          fetchContacts()
        }
      });
  };

  const fetchContacts = () => {
    fetch("https://boolean-api-server.fly.dev/hkyksk/contact")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setContacts(data)
      })
      .catch(error => {
        console.error('An error occurred while fetching contacts:', error);
      })
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <Router>
      <div className="app-container">
        <div className="menu">
          <h2>Menu</h2>
          <nav>
            <li><Link to="/contacts">Contact List</Link></li>
            <li><Link to="/create-contact">Add New Contact</Link></li>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/contacts" element={<ContactList contacts={contacts}/>} />
            <Route path="/contacts/view/:contactId" element={<ContactListItem contacts={contacts} />} />
            <Route path="/create-contact" element={<NewContactForm createContact={createContact} handleChange= {handleChange} handleSubmit={handleSubmit} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
