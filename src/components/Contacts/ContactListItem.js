import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from "../../DataContext"

function ContactListItem() {
  const { contactPerson } = useContext(DataContext)
  const [contact, setContactDetails] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const getContactDetails = (id) => {
      return contactPerson.find((contact) => contact.id === parseInt(id))
    }

    setContactDetails(getContactDetails(id))
  }, [contactPerson, id])

  if (!contact) {
    return <p>Loading...</p>
  }

  return (
    <article className='contact-item-container'>

      <h2 className='contact-item-title'>Contact Details</h2>
      <h3>{contact.name}</h3>
      <p>Street: {contact.address.street} {contact.address.suite}</p>
      <p>City: {contact.address.city}</p>
    </article>
  )
}

export default ContactListItem
