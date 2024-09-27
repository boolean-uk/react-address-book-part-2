import React from 'react';
import {Link} from 'react-router-dom'

const ContactListItem = ({contact}) => {

    return (
        <div className='contact-list-item'>
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`/contact/${contact.id}`}>View</Link>

        </div>
    );
}

export default ContactListItem;
