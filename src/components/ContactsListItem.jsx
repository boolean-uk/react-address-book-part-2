import { Link } from "react-router-dom"

export default function ContactsListItem(props) {
    const { contacts } = props

    return (
        <div>
            {contacts.map(contact => 
                <>
                    <p key={contact.id}>{contact.firstName} {contact.lastName}</p>
                    <Link to={`contact/${contact.id}`}>View</Link>
                </>
            )}
        </div>
    )
}