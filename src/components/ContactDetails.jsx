import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = ({ contact, onClose, fetchContact }) => {
  const { id } = useParams()

  useEffect(() => {
    fetchContact(id)
  }, [id, fetchContact])

  return (
    <div>
      <h2>Your Contact Details</h2>
      <button onClick={onClose}>Close</button>
      {contact ? (
        <>
          <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
          <p><strong>Street:</strong> {contact.street}</p>
          <p><strong>City:</strong> {contact.city}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ContactDetails
