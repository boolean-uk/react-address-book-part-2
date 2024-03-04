import React, { useState } from 'react';
import ContactListItem from './ContactListItem';
import '../styles/ContactList.css'

const ContactList = ({contacts, url}) => {
    console.log("🚀 ~ ContactList ~ contacts:", contacts)
    const [search, setSearch] = useState("")

    const filteredContacts = contacts.filter(contact => {
      return contact.firstName.toLowerCase().search(search.toLowerCase()) !==-1 || 
      contact.lastName.toLowerCase().search(search.toLowerCase()) !==-1 ||
      contact.street.toLowerCase().search(search.toLowerCase()) !==-1 ||
      contact.city.toLowerCase().search(search.toLowerCase()) !==-1 
    })

    return (
        <section>
          <h2>Contacts</h2> 
          <input type='search' value={search} onChange={event => setSearch(event.target.value)}/>
          <ul className='contact-list'>
            {filteredContacts && filteredContacts.map((contact, index) => (
                <ContactListItem contact={contact} url={url} key={index}/>
            ))}
          </ul> 
        </section>
    );
}

export default ContactList;
