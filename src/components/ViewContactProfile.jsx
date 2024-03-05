import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ContactForm from './ContactForm'

function ViewContactProfile(props) {
  const {contacts, setContacts} = props
  const { id } = useParams()
  const navigate = useNavigate()

  

  const person = contacts[id]
  
  const handleDelete = () => {
    let copyContacts = contacts.filter(contact => contact.firstName !== person.firstName, contact => contact.lastName !== person.lastName)
    console.log(copyContacts)
    setContacts(copyContacts)

    fetch(`https://boolean-api-server.fly.dev/SebastianEngan/contact/${person.id}`, {
      method: "DELETE",
    })
    .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json()
    })
    .then(data => {
      console.log("Contact deleted successfully:", data);
    })
    navigate("/contacts")
  }

  return (
    <>
        <h1>{person.firstName} {person.lastName}</h1>
        <h2>Street: {person.street}</h2>
        <h2>City: {person.city}</h2>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default ViewContactProfile