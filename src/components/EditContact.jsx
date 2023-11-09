import { useState, useEffect } from "react"
import { useParams, useNavigate  } from "react-router-dom"

export default function EditContact({setReloadingNecessary}) {
    
  const {id} = useParams()
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const fetchContact = () => {
    const username="AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`
    
    fetch(baseURL + endpoint)
      .then(res => res.json()) 
      .then(data => setForm(data))
  }

  useEffect(fetchContact, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const username="AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${form.id}`

    const updatedContact = {
        firstName:  e.target[0].value,
        lastName: e.target[1].value,
        street: e.target[2].value,
        city: e.target[3].value,
    }

    const options = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(updatedContact)
    }

    fetch(baseURL + endpoint, options)
        .then(res => res.json())
        .catch(error =>  console.log(error))
        .then(setReloadingNecessary(true))
        .then(navigate ("/"))
  }

  return(
    <form onSubmit={(e) => handleFormSubmit(e)}>
      {/* {Object.keys(contact).map((key, index) => <FormField key={index} name={key} value={contact[key]} type="text" />)} */}
      <div className="form-element">
          <label htmlFor="First Name">First Name:</label>
          <input 
          name="firstName"
          type="text" 
          placeholder="First Name" 
          value={form.firstName}
          onChange={e => setForm({...form, [e.target.name]: e.target.value})}
          />
      </div>
      <div className="form-element">
          <label htmlFor="Last Name">Last Name:</label>
          <input 
          name="lastName"
          type="text" 
          placeholder="Last Name"
          value={form.lastName} 
          onChange={e => setForm({...form, [e.target.name]: e.target.value})}
          />
      </div>
      <div className="form-element">
          <label htmlFor="Street">Street:</label>
          <input 
          name="street"
          type="text" 
          placeholder="Street" 
          value={form.street}
          onChange={e => setForm({...form, [e.target.name]: e.target.value})}
          />
      </div>
      <div className="form-element">
          <label htmlFor="City">City:</label>
          <input
          name="city" 
          type="text" 
          placeholder="City"
          value={form.city} 
          onChange={e => setForm({...form, [e.target.name]: e.target.value})}
          />
      </div>
      
      <button className="submit-button" type ="submit">Update Contact</button>
    </form>
  )
}