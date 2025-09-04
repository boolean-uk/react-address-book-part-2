/* eslint-disable react/prop-types */
import ContactListItem from './ContactListItem'
import { useContext } from "react";
import { AppContext } from "../../../App.jsx"

function ContactList() {
  const { contacts } = useContext(AppContext)

  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactListItem key={index} contact={contact}/>
      ))}
    </ul>
  )
}

export default ContactList
