import React from 'react'
import ContactForm from './CreateContact/ContactForm'

function CreateContact({setContacts}) {
  return (
    <div className="body-content">
      <h1>Create Contact</h1>
      <ContactForm setContacts={setContacts}/>
    </div>
  )
}

export default CreateContact