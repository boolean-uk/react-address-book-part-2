import { useParams } from "react-router-dom";

export default function ViewContact(props)
{
    const { id } = useParams()
    const { contacts } = props
    const contact = contacts[id - 1]

    return (
        <>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.street} {contact.city} </p>
        </>
    )
}