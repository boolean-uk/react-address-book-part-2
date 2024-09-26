import React from 'react';
import { Link } from 'react-router-dom';
import ContactListItem from './ContactListItem';
import DeleteContact from '../DeleteContact';


function Dashboard(props) {

    const {contacts, onDeleteContact} = props

    console.log(contacts)

    if (!contacts || contacts.length === 0) {
        return (
          <div>
            <h2>Contact List</h2>
            <p>Loading...</p>
            
          </div>
        );
      }

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
           
            <DeleteContact contact={contact} onDelete={onDeleteContact} />
            
            <Link to={`/edit-contact/${contact.id}`}>Edit</Link>
            
          </li>
        ))}
      </ul>
      <Link to="/create-contact">Create a Contact</Link>
    </div>
  );
}

export default Dashboard;