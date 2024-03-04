import React from 'react'
import { Link } from 'react-router-dom'
import '../Dashboard.css'

function ContactListItem({contact}) {

  return (
    <li className='contact-list-item'>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <Link to={`/view/${contact.id}`}>View</Link>
    </li>
  )
}

export default ContactListItem