import { useParams } from "react-router-dom"

export default function ContactDetails ({contacts}) {
    const { id } = useParams()
    const contact = contacts.find(c => c.id === parseInt(id) )

    // console.log(typeof(parseInt(id)))
    // console.log(contact)
    return (
        <div>
            <h2>{contact.firstName + " " + contact.lastName}</h2>
            <p>{contact.street}</p>
        </div>
    )
}