import React from 'react'
import { useParams } from 'react-router-dom';
import './ContactProfile.css'

function ContactProfile({contacts}) {
  const {id} = useParams()
  const contact = contacts.find((contact) => contact.id == id); //id is string, contact.id is int, so two '=' to only check value not type
  if (!contact) return <p>Loading...</p>
  return (
    <div className='contact-profile'>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <h3>
        Street : {contact.street} 
      </h3>
      <h3>
        City : {contact.city} 
      </h3>
    
    </div>
  )
}

export default ContactProfile