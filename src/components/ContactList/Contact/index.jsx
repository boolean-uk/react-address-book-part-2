import { Link, useNavigate } from "react-router-dom"
import './style.css'

function Contact(props) {
    const { contact } = props
    const navigate = useNavigate()

    return(
        <li className="contact-list-item">
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`/contact/${contact.id}`}>View</Link>
        </li>
    )
}

export default Contact