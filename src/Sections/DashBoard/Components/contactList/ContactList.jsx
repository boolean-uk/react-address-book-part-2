import React from 'react'
import ContactItem from './ContactItem.jsx'
import PropTypes from 'prop-types'

ContactList.propTypes = {
    contacts: PropTypes.array,
    setContact: PropTypes.func
  }
  

export default function ContactList(props) {
    const { contacts, setContact} = props
    // console.log(contacts);

  return (
    <ul className="contact-List">
        {contacts && contacts.length > 0 && contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} setContact={setContact}/>
        ))}
    
    </ul>
  )
}
