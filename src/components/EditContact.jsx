import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initial_state =  {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  jobtitle: "",
  street:"",
  city: "",
}

function EditContact(props) {

  const { setReloadingNecessary } = props

  const [form, setForm] = useState(initial_state)

  const { id } = useParams()

  const navigate = useNavigate()

  const getCurrentContact = () => {
    const username = "loza01"
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
    const username = "loza01"
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
      <div className = "form-element">
                <label htmlFor = "First Name">First Name:</label>
                <input 
                name = "firstName"
                type = "text" 
                placeholder = "First Name" 
                value={form.firstName}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Last Name">Last Name:</label>
                <input 
                name = "lastName"
                type = "text" 
                placeholder = "Last Name"
                value={form.lastName} 
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "gender">gender:</label>
                <input 
                name = "gender"
                type = "text" 
                placeholder = "gender" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "email">Email:</label>
                <input 
                name = "email"
                type = "text" 
                placeholder = "email" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "jobTitle">Job Title:</label>
                <input 
                name = "jobTitle"
                type = "text" 
                placeholder = "jobTitle" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Street">Street:</label>
                <input 
                name = "street"
                type = "text" 
                placeholder = "Street" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "City">City:</label>
                <input
                name = "city" 
                type = "text" 
                placeholder = "City"
                value={form.city} 
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
      <button className = "submit-button" type="submit">Add Contact</button>
    </form>
  )
}

export default EditContact;