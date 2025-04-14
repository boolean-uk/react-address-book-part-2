import React, { useContext } from "react";
import { ContactsContext } from "../App";
import ContactListItem from "./ContactListItem";



export default function ContactList(){
    const { contacts } = useContext(ContactsContext);
    return (
        <ul className="user-list">
            <h3 className="centerText">Contacts</h3>
           {contacts.map((contact, index) => {
            return <ContactListItem contact={contact} key={index} />
           })} 
        </ul>
    )
}