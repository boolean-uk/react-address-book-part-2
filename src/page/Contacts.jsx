import React from 'react'
import PropTypes from "prop-types"
import ContactList from './Contacts/ContactList'

function Contacts({contacts}) {
  return (
    <div className="body-content">
      <h1>Contacts</h1>
      <ContactList contacts={contacts}/>
    </div>
  )
}

Contacts.propTypes = { 
	contacts: PropTypes.array.isRequired,
}

export default Contacts