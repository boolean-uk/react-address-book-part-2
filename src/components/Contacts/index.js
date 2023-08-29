import React, { useContext } from 'react'
import DataContext from '../../DataContext'
import ContactList from './ContactList'

function ContactInfo() {
  const { contactPerson } = useContext(DataContext)
  console.log(contactPerson)

  if (!contactPerson) {
    return <p>No contact found...</p>
  }

  return <ContactList contactPerson={contactPerson} />
}

export default ContactInfo
