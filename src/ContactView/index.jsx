import { useContext, useState, useEffect } from "react"
import { ContactsContext } from "../App"
import { useParams } from "react-router-dom";

function ContactView(){
    const {contacts} = useContext(ContactsContext);
    const [contact, setContact] = useState({});
    const {id} = useParams();

    useEffect( () => {
        if (contacts.length > 0) {
            const foundContact = contacts.find((c) => c.id === Number(id));
            setContact(foundContact);
        } else {
            console.log("Contact not found");
        }
       }, [contacts, id]
    )
    

    return(
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.street} {contact.city}</p>
        </div>
        
    )
}

export default ContactView