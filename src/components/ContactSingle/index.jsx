import { Link, useParams } from "react-router-dom"

function ContactSingle({ contacts }) {
    let { id } = useParams()
    let contact = contacts.find(c => c.id === parseInt(id))
    console.log(contact)
    console.log(id)
    return (
        <div>
            {contact.firstName} {contact.lastName} <br />
            Lives at {contact.street}, which is in the city of {contact.city}. <br />
            <Link to={"/"}>Go back</Link>
        </div>
    )
}

export default ContactSingle