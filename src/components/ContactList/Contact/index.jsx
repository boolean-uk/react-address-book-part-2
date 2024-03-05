import { Link, useNavigate } from "react-router-dom"

function Contact(props) {
    const { contact, contacts, setContacts } = props
    const navigate = useNavigate()

    return(
        <li className="contact-list-item">
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`/contact/${contact.id}`}>View</Link>

        </li>
    )
}

export default Contact