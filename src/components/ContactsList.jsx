import { Link } from "react-router-dom";
import { useContext } from 'react';
import { contactContext } from "../App";
import ContactListElement from "./ContactListElement";

export default function ContactsList() {

    const { contacts } = useContext(contactContext)
    return (
        <div className="contact-list">
            <h4>Contacts</h4>
            {contacts ? contacts.map((contact, index) => (
                <ContactListElement key={index} contact={contact} />
            ) ) : null}
        </div>
    )
}

