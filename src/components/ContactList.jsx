import React, { useState } from 'react';
import ContactListItem from './ContactListItem';

export default function ContactList({contacts, onDelete}){
  const [searchQuery, setSearchQuery] = useState('')


  const filteredContacts = contacts.filter(contact => {
    const fullname = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullname.includes(searchQuery.toLowerCase())
  })

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

    return (
        <section>
          <h2>Contacts</h2> 
          <ul className='contact-list'>
            <input
            type='text'
            placeholder='Search contact list'
            value={searchQuery}
            onChange={handleSearchChange}
            />
            {(searchQuery === '' ? contacts : filteredContacts).map((contact, index) => (
              <ContactListItem contact={contact} key={index} onDelete={onDelete}/>
            ))}
          </ul> 
        </section>
    );
}
