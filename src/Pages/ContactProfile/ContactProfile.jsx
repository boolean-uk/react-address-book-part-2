import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './ContactProfile.css'
import { deleteContact } from '../../Toolbox/api';

function ContactProfile({contacts, updateContacts}) {
  const {id} = useParams()
  const navigate = useNavigate()
  const contact = contacts.find((contact) => contact.id == id); //id is string, contact.id is int, so two '=' to only check value not type
  if (!contact) return <p>Loading...</p>
  function handleDelete(){
    deleteContact(id).then(updateContacts()).then(navigate("/"))
  }
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
      <button onClick={()=>handleDelete()}>Delete</button>
    
    </div>
  )
}

export default ContactProfile