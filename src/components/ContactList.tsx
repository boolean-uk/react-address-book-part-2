import React from 'react';
import { Contact } from '../types';
import ContactListItem from './ContactListItem';

type ContactListProps = {
    contacts: Array<Contact>
};

const ContactList = ({ contacts }: ContactListProps) => {
    return (
        <div>
            <h2>Contacts</h2>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default ContactList;
