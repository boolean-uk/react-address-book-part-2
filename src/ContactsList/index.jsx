import { useContext } from "react";
import { ContactsContext } from "../App";
import ContactListItem from "./Components/ContactListItem";

function ContactsList(){
    const {contacts} = useContext(ContactsContext);

    return(
        <>
            <h1>Contacts</h1>
            <ul>
                {contacts.map((contact) => (
                    <ContactListItem key={contact.id} contact={contact}/>
                )
                )}
            </ul>
        </>
        
    )
}


export default ContactsList;