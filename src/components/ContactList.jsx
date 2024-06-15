import React from 'react';

const ContactList = ({ contacts, viewContactDetails }) => {
  return (
    <div>
      <h2></h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
            <button onClick={() => viewContactDetails(contact.id)}>View More</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
