import { Link } from "react-router-dom"

export default function ContactListItem({ contact, setSelectedContact }) {
  return (
    <li>
      <Link
        to={`/contact/${contact.id}`}
        onClick={() => setSelectedContact(contact)}
      >
        {contact.firstName} {contact.lastName}
      </Link>
    </li>
  )
}
