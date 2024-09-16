import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ContactListItem(props) {
    const {contact, keyData, updateContact, setUpdateContact} = props
    const navigate = useNavigate()

    const handleEdit = () => {
      setUpdateContact({updating: true, index: keyData})
      console.log("edit click:", updateContact)
      navigate(`/contacts/edit-contact-form`)
    }
    
    
  return (
    <>
        <li key={keyData}>
            <Link to={`/contacts/${keyData}`}>
                {contact.firstName} {contact.lastName} 
            </Link>
        </li>
        <button onClick={handleEdit}>Edit</button>
    </>
  )
}

export default ContactListItem