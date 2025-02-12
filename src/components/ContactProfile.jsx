import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import { useParams } from "react-router-dom";

function ContactProfile() {

    const context = useContext(DataContext)
    const [contact, setContact] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        if (context.contacts && id) {
            const matchingContact = context.contacts.find((contact) => 
                Number(contact.id) === Number(id)
            )
            setContact(matchingContact)
        }
    }, [context.contacts, id])
  
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

export { ContactProfile }