import { Link } from 'react-router-dom'
import '../Contacts.css'

export default function ContactListItem(props) {
    const { contact } = props

    if(contact) return (
        <li className="list-item">
            <div className="contact-name">
                {contact.firstName}
            </div>
            <Link to={`/view/${contact.id}`} className="contact-view">
                View
            </Link>
        </li>
    )

    return (
        <div>loading...</div>
    )   
}