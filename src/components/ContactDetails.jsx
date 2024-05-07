import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ContactDetails({ contacts }) {
    const [selectedContact, setSelectedContact] = useState(null)
    const params = useParams()

    useEffect(() => {
        const person = contacts.find(c => c.id === Number(params.id))
        setSelectedContact(person)
    }, [params.id, contacts])

    return (
        <div>
            { selectedContact && 
                <>
                    <h2>{`${selectedContact.firstName} ${selectedContact.lastName}`}</h2>
                    <p>{`${selectedContact.street} ${selectedContact.city}`}</p>
                </>
            }
        </div>
    )
}