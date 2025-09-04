/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ContactListItem({ index, contact }) {

  return (
    <li key={index}>
      <h3>
        <Link to={`/view/${contact.id}`}>
          {contact.firstName + " " + contact.lastName}
        </Link> 
      </h3>
      <Link to={`/edit/${contact.id}`}>
          Edit
        </Link> 
    </li>
  )
}

export default ContactListItem
