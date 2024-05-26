import { Link } from 'react-router-dom'

export default function ContactListLog({contact}) {
console.log(contact)

return(
    <li>
        <p>{contact.firstName} {contact.lastName}</p>
        <Link to={`/contact/${contact.id}`}><p>View</p></Link>
    </li>
  )
}