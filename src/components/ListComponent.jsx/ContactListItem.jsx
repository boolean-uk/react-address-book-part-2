import { Link } from 'react-router-dom'

export default function ContactListItem(props) {
    const { contact } = props

    if(contact) return (
        <li className="list-item">
            <div className="name">
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