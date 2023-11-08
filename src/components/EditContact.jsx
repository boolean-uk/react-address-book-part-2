import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initial_state =  {
  firstName: "",
  lastName: "",
  street:"",
  city: "",
}

function EditContact(props) {

  const { setReloadingNecessary } = props

  const [form, setForm] = useState(initial_state)

  const { id } = useParams()

  const navigate = useNavigate()

  const getCurrentContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`

    fetch(baseURL + endpoint)
      .then(res => res.json())
      .then(data => setForm(data))
  }

  useEffect(
    getCurrentContact, []
  )

  const updateContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`

    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form)
    }
    
    fetch(baseURL + endpoint, options)
      .then(res => res.json())
      .then(setReloadingNecessary(true)) 
      .then(data =>  
        (setForm(data)))
  }

  const submitUpdatedContact = (e) => {
    e.preventDefault();
    updateContact()
    navigate(`/view/${id}`)
  }

  return (
    <form onSubmit={(e) => submitUpdatedContact(e)}>
      <div className="form-element">
        <label htmlFor="First Name">First Name:</label>
        <input
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </div>
      <div className="form-element">
        <label htmlFor="Last Name">Last Name:</label>
        <input
          name="lastName"
          type="text"
          value={form.lastName}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </div>
      <div className="form-element">
        <label htmlFor="Street">Street:</label>
        <input
          name="street"
          type="text"
          value={form.street}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </div>
      <div className="form-element">
        <label htmlFor="City">City:</label>
        <input
          name="city"
          type="text"
          value={form.city}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </div>
      <button className = "submit-button" type="submit">Update Contact</button>
    </form>
  )
}

export default EditContact;