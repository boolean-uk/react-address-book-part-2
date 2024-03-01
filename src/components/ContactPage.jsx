import { useParams } from "react-router-dom"

export default function ContactPage(props){
    const {contacts} = props
    const {id} = useParams()
    const thisContact = contacts.find((contact) => (contact.firstName+contact.lastName) === id)

    if (!thisContact) return <p>Loading...</p>

    return (
        <article>
            <h2>
                {thisContact.firstName} {thisContact.lastName}
            </h2>
            <h3>Address:</h3>
            <ul>
                <li>{thisContact.street},</li>
                <li>{thisContact.city}</li>
            </ul>
        </article>
    )
}