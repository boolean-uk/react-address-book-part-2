import { useContacts } from '../context/ContactContext'
import { Link } from "react-router-dom"

export default function ContactList() {
  const { contacts } = useContacts()

  return (
    <div>
            <h1>Contact List</h1>

            {/* Create a Contact button */}
            <Link to="/create-contact">
                <button>Create a Contact</button>
            </Link>

            {/* Display the list of contacts */}
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <Link to={`/contacts/${contact.id}`}>
                            {contact.firstName} {contact.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
  )
}
