import React from 'react'
import { Link } from 'react-router-dom'

const ContactList = ({ contacts, viewContactDetails }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
            <Link to={`/contact/${contact.id}`} onClick={() => viewContactDetails(contact.id)}>View Contact</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
