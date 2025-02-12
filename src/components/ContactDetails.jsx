import { useState, useEffect } from "react";
import { ContactContext } from "../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";


function ContactDetails(){
    const contactContext = useContext(ContactContext)
    const [contact, setContact] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        if (contactContext.contacts.length > 0) {
            const selectedContact = contactContext.contacts.find(contact => contact.id === parseInt(id));
            setContact(selectedContact);
        }
      }, [contactContext.contacts, id]);


    if (!contact) {
        return <p>Loading...</p>; 
    }

    return (

        <>
        
            <div className="contact-details">
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>Street: {contact.street}</p>
                <p>City: {contact.city}</p>
            </div>
        
        </>

    )

}


export default ContactDetails