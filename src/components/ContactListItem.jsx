import React from 'react';
import {Link} from 'react-router-dom'

export default function ContactListItem({contact, onDelete}) {

    return (
        <div className='contact-list-item'>
        <p>{contact.firstName} {contact.lastName}</p>
        <Link to={`/contact/${contact.id}`}>View</Link>

        <button onClick={() => {onDelete(contact.id)}}>Delete</button>
   </div>
    );
}
