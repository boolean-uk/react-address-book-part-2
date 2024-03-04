import { Link } from 'react-router-dom';

function ContactsListItem(props) {
  const { contact } = props

  return (
    <li>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <Link 
      to={{ pathname: `/contacts/view/${contact.firstName + contact.lastName}`}}>
        View Profile
      </Link>
    </li>
  )
}

export default ContactsListItem