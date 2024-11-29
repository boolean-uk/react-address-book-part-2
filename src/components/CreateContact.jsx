import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContacts } from "../context/ContactContext"

export default function CreateContact() {
  const { contacts, setContacts } = useContacts()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    fetch("https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((newContact) => {
        setContacts([newContact, ...contacts])

        navigate("/contacts")
      })
      .catch((err) => console.error(err))
  }
  

  return (
    <div>
      <h1>Create a Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create Contact</button>
      </form>
    </div>
  )
}
