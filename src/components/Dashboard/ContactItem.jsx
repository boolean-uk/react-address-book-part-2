import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react"
import { ContactContext } from "../../App";

function ContactItem() {
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const { contacts } = useContext(ContactContext);

    useEffect(() => {
        if (contacts && id) {
          setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
      }, [contacts, id]);

    if (!contact) return <p>No contact with ID: {id}</p>;
    
    return (
        <>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}, {contact.city}</p>
            <iframe width="400" height="400" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
        </>
    );
}

export default ContactItem;