import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditContact({contacts, setContacts, updateContact, setUpdateContact}) {
    const [formContact, setFormContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })
    const navigate = useNavigate()

    const handleChange= (event) => {
        const { name, value } = event.target
        setFormContact({...formContact, [name]: value})
        console.log(value)
    }

    const setEditedContact = (event) => {
        event.preventDefault()
        console.log(updateContact)
        if(updateContact.updating){
            let prevContacts = [...contacts]
            console.log(updateContact.index)
            prevContacts[updateContact.index] = formContact
            setContacts(prevContacts)
            navigate(`/contacts/${updateContact.index}`)
            setUpdateContact({updating: false, index: -1})
        }
        else {
            setContacts([...contacts, formContact]);
        }
        setFormContact({
            firstName: '',
            lastName: '',
            street: '',
            city: ''
        })
        
    }
    
  return (
    <>
    <form className='contact-form' onSubmit={setEditedContact}>
        <h2>
            Add new Contact
        </h2>
        <label>
            First Name
            <input type="text" name="firstName" value={formContact.firstName} onChange={handleChange}/>
        </label>
        <label>
            Last Name
            <input type="text" name="lastName" value={formContact.lastName} onChange={handleChange}/>
        </label>
        <label>
            Street address
            <input type="text" name="street" value={formContact.street} onChange={handleChange}/>
        </label>
        <label>
            City
            <input type="text" name="city" value={formContact.city} onChange={handleChange}/>
        </label>
        <input className="form_Submit" type="submit" value="Save contact"/>
    </form>
    </>
  )
}

export default EditContact