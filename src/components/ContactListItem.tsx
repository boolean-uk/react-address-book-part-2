import React from 'react';
import { Contact } from '../types';
import { Link } from 'react-router-dom';

type ContactListItemProps = {
    contact: Contact;
};

const ContactListItem = ({ contact }: ContactListItemProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px'}}>
            <p>{contact.firstName + ' ' + contact.lastName}</p>
            <Link to={`/${contact.id}`}>View</Link>
        </div>
    );
};

export default ContactListItem;