import React from 'react'
import { useParams } from 'react-router-dom';

function ContactProfile({contacts}) {
  const {id} = useParams()
  const contact = contacts.find((contact) => contact.id == id); //id is string, contact.id is int, so two '=' to only check value not type
  if (!contact) return <p>Loading...</p>
  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <h3>
        {contact.street} {contact.city}
      </h3>
    
    </div>
  )
}

export default ContactProfile