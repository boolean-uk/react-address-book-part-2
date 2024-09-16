import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './Users/ContactList';
import NewContactForm from './NewUsers/NewContactForm';
import ContactListItem from './Users/ContactListItem';
import ContactListItemUpdate from './Users/ContactListItemUpdate';

export default function Index() {
  const [contacts, setContacts] = useState([])
  const [createContact, setCreateContact] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  })

  useEffect(() => {
    fetchContacts()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setCreateContact(prevCreateContact => ({
      ...prevCreateContact,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
          })
          fetchContacts()
        }
      })
  }

  const fetchContacts = () => {
    fetch("https://boolean-api-server.fly.dev/hkyksk/contact")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data)
      })
      .catch(error => {
        console.error('An error occurred while fetching contacts:', error);
      })
  }

  const handleDelete = (contactId) => {
    fetch(`https://boolean-api-server.fly.dev/hkyksk/contact/${contactId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          fetchContacts()
        }
      })
  }

  const handleUpdate = (contactId, updatedContact) => {
    fetch(`https://boolean-api-server.fly.dev/hkyksk/contact/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedContact)
    })
      .then(response => {
        if (response.ok) {
          fetchContacts()
        }
      })
  }

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
            <Route path="/contacts" element={<ContactList contacts={contacts} onDelete={handleDelete} onUpdate={handleUpdate} />} />
            <Route path="/contacts/view/:contactId" element={<ContactListItem contacts={contacts} onDelete={handleDelete} />} />
            <Route path="/contacts/edit/:contactId" element={<ContactListItemUpdate contacts={contacts} onDelete={handleDelete} />} />
            <Route path="/create-contact" element={<NewContactForm createContact={createContact} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}