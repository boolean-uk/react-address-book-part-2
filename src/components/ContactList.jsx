import React from 'react';
import ContactListItem from './ContactListItem';
import '../styles/ContactList.css'

const ContactList = ({contacts}) => {
    return (
        <section>
          <h2>Contacts</h2> 
          <ul className='contact-list'>
            {contacts && contacts.map((contact, index) => (
                <ContactListItem contact={contact} key={index}/>
            ))}
          </ul> 
        </section>
    );
}

export default ContactList;
