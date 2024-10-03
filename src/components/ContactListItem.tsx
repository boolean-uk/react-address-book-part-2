import React from "react";
import { Contact } from "./Dashboard";

interface ContactListItemProps {
    contact: Contact
    onSelect: () => void
}

const ContactListItem = ({ contact, onSelect }: ContactListItemProps) => {

    return (
        <tr className="contact-list-item" onClick={onSelect} >
            <td>{`${contact.firstName} ${contact.lastName}`}</td>
            <td>{contact.email}</td>
            <td>{contact.jobTitle}</td>
        </tr>
    )
}

export default ContactListItem;