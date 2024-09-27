import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateContactForm(props) {
  const [contact, setContact] = useState({})
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`${props.baseURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city
      }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    
    props.getData()
    setContact({})
    navigate('/')
  }

  
  
  return (
    <>
      <h2>New Contact</h2>
      <form>
          <div>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" required 
              value={contact.firstName} onChange={(e) => setContact({...contact, firstName: e.target.value})}>
            </input>
          </div>
          <div>
            <label for="lastName">Last Name:</label>
            <input 
              type="text" id="lastName" name="lastName" required
              value={contact.lastName} onChange={(e) => setContact({...contact, lastName: e.target.value})}>
            </input>
          </div>
          <div>
            <label for="streetAddress">Street Address:</label>
            <input type="text" id="streetAddress" name="streetAddress" required
              value={contact.street} onChange={(e) => setContact({...contact, street: e.target.value})}>
            </input>
          </div>
          <div>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required
              value={contact.city} onChange={(e) => setContact({...contact, city: e.target.value})}>
            </input>
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>Create User</button>
      </form>
    </>
  )
}

export default CreateContactForm