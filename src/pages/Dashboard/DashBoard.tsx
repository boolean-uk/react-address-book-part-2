import React, { useContext } from "react";
import { ContactsContext } from "../../App";
import ContactList from "../../components/ContactList";


export default function Dashboard(){
    const { contacts, setContacts } = useContext(ContactsContext);


    return (
        <div className="user-container">
            <ContactList /> 
        </div>
    )
} 