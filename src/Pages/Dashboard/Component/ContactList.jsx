import React from 'react'
import ContactListItem from './ContactListItem'

function ContactList({contacts}) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactListItem key={index} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList