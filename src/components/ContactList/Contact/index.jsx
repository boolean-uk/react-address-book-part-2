import { Link } from "react-router-dom"

function Contact(props) {
    const { contact } = props

    return(
        <li>
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to="/contact/:id">View</Link>
        </li>
    )
}

export default Contact