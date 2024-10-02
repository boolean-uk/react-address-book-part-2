import { useContext } from "react"
import { ContactContext } from "../App"
import { Link } from "react-router-dom";

function ContactsList() {
    const { contacts } = useContext(ContactContext)

    return (
        <section className="contactsList">
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, key) => (
                    <li key={key}>
                        <p>{`${contact.firstName} ${contact.lastName}`}</p>
                        <Link to={`/view/${contact.id}`}><p>View</p></Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ContactsList