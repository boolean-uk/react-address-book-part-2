import React from "react";
import { Contact } from "./Dashboard";
import ContactListItem from "./ContactListItem";

interface ContactListProps {
    contacts: Contact[]
    onContactSelect: (contact: Contact) => void
}

const ContactList = ({ contacts, onContactSelect }: ContactListProps) => {

    return (
        <div className="contact-list">
             <table className="contact-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <ContactListItem 
                        key={contact.id} 
                        contact={contact} 
                        onSelect={() => onContactSelect(contact)}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList;