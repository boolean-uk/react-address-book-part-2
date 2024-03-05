
import { useState, useEffect } from 'react'
import ContactListItem from './components/ContactListItem'



function ContactList({contacts}) {
  const [updatedContacts, setUpdatedContacts] = useState([]);

  useEffect(() => {
    setUpdatedContacts(contacts);
  }, [contacts]);


  return (
    <ul>
        {updatedContacts.map((contact) =>
        <ContactListItem key= {contact.id} contact={contact}></ContactListItem>
        )}
    </ul>
  )
}



export default ContactList
