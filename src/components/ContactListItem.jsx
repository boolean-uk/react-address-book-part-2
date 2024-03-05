import { Link } from "react-router-dom"

function ContactListItem({index, contact}) {
  return (

    <li key={index}>
        <Link to={`/contacts/view/${contact.id}`}>
            <h2>{contact.firstName} {contact.lastName}</h2>
        </Link>
    </li>

  )
}

export default ContactListItem