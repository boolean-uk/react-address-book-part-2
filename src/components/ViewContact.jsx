import { useContext, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContactsContext } from "../App"

export default function ViewContact() {
    const { id } = useParams()
    const contacts = useContext(ContactsContext).contacts
    const [contact, setContact] = useState(null)

    // find the contact with matching id
    useEffect(() => {
        if (id && contacts) {
            const matchingContact = contacts.find((contact) =>
                Number(contact.id) === Number(id)
            )
            setContact(matchingContact)
        }
    }, [id, contacts])

    if (!contact) {
        return <p>Contact not found</p>
    }

    return (
        <>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}, {contact.city}</p>
        </>
    )
}
