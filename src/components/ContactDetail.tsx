import { useContext, useEffect, useState } from "react";
import { Contact} from "./interfaces";
import { useParams } from "react-router";
import { ContactContext } from "../App";


function ContactDetail() {
    const {contacts} = useContext(ContactContext);
    const [contact, setContact] = useState<Contact | null>();
    const {id} = useParams<{id: string}>();
    useEffect(() => {
        const foundContact = contacts.find((c) => c.id === parseInt(id ?? "-1"));
        setContact(foundContact);
    }, [id, contacts]);

    if (!contact) return <p>Not found Contact</p>

    return (
        <div>
            <p>Name: {contact.firstName} {contact.lastName} </p> 
            <p>Street: {contact.street}</p> 
            <p>City: {contact.city}</p>
            <p>𒂝 𒈙	𒈚 𒌦 𒌋 𒊹</p>
        </div>
    )
    
}

export default ContactDetail;