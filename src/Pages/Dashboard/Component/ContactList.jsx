import React from 'react'
import ContactListItem from './ContactListItem'
import '../Dashboard.css'

function ContactList({contacts,updateContacts}) {
  return (
    <ul className='contact-list'>
      {contacts.map((contact, index) => (
        <ContactListItem key={index} contact={contact} updateContacts={updateContacts}/>
      ))}
    </ul>
  )
}

export default ContactList