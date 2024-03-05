import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ContactListItem(contact) {
  return (
    <li>
        <h4>
            {contact.contact.firstName} {contact.contact.lastName}
        </h4>
        <Link to = {`/contacts/${contact.contact.id}`}>Details</Link>
    </li>
  )
}

ContactListItem.propTypes = {
    contact: PropTypes.object
}

export default ContactListItem
