import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditContact(props) {
  const { contacts, update } = props
  const { id } = useParams()
  const [person, setPerson] = useState(contacts.find((p) => p.id == id))
  const navigate = useNavigate()

  if (!person) return <p>Person not found...</p>

  async function handleSubmit(event) {
    event.preventDefault()

    const putRequest = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    }

    await fetch("https://boolean-api-server.fly.dev/henrikrosenkilde/contact/" + person.id, putRequest)
    await update()
    navigate("/view/" + person.id)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setPerson({...person, [name]:value})
  }

  return (
    <div className='edit-contact-container'>
      <h1>Edit Person</h1>
      <form className='edit-form' onSubmit={handleSubmit}>
        <div>
            <h3>First Name</h3>
            <input 
                type="firstName"
                name="firstName"
                value={person.firstName}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Last Name</h3>
            <input 
                type="lastName"
                name="lastName"
                value={person.lastName}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Street</h3>
            <input 
                type="street"
                name="street"
                value={person.street}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>City</h3>
            <input 
                type="city"
                name="city"
                value={person.city}
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Email</h3>
            <input 
                type="email"
                name="email"
                value={person.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  )
}

export default EditContact