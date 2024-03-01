import { Link } from "react-router-dom"

export default function ContactsListItem(props) {
    const {index, contact} = props
    return(
        <li key={index}>
            <h3>
                {contact.firstName} {contact.lastName}
            </h3>
            <Link to={`/contacts/${contact.firstName}${contact.lastName}`}>View</Link>
        </li>
    )
}