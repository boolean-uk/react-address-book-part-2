import { Link} from 'react-router-dom'


function ContactsListItem(props) {
  console.log("Inside ContactsListItem: ", { props });

  const { contact } = props


  return (
    <li>
      <h3>
        {contact.firstName} {contact.lastName}
        <Link to={`/contacts/${contact.id}`}>View Profile</Link>
      </h3>
      {contact.street && <p>street: {contact.street}</p>}
    </li>
  )
}

export default ContactsListItem
