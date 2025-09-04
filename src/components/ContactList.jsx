import { useContext } from "react";
import { ContactContext } from "../App";
import Contact from "./Contact";
// import {ContactContext} from "./src/App.jsx"

function ContactList() {
    const {contacts}  = useContext(ContactContext)
    return <>
        <h1>Contacts</h1>
        <ul>
            {contacts.map((contact, index) => (
                <Contact key={index} contact={contact} id={index}/>
            ))}
        </ul>
        
        </>
}

export default ContactList;