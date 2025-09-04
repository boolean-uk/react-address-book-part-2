import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function ContactProfile({ contacts }) {

    const [contact, setContact] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find((contact) => 
                Number(contact.id) === Number(id)
            )
            setContact(matchingContact)
        }
    }, [contacts, id])

    if (!contact) return <div>Loading...</div>

    return (
        <div>
            <h3>Contact profile:</h3>
            <h4>{contact.firstName} {contact.lastName}</h4>
            <p>{contact.street}, {contact.city}</p>
            <hr />
        </div>
    )
}

export default ContactProfile;