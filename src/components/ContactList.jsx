import React from 'react'
import ContactListItem from './ContactListItem'


function ContactList(props) {
    const { contacts, setContacts, updateContact, setUpdateContact } = props

  return (
    <>
        <h1>Contacts</h1>
        <ul>
            {contacts.map((contact, index) => (
                <ContactListItem 
                  key={index}
                  keyData={index} 
                  contact={contact} 
                  contacts={contacts} 
                  setContacts={setContacts}
                  updateContact={updateContact}
                  setUpdateContact={setUpdateContact}
                />
            ))}
        </ul>
    </>
  )
}

export default ContactList