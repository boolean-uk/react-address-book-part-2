import { useState } from 'react'
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

function NewContactForm(props) {
  const { update } = props
  const [person, setPerson] = useState({})
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    const postRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    }
    console.log(person)
    await fetch("https://boolean-api-server.fly.dev/kristianverduin/contact", postRequest)
    update()
    navigate("/")
  }

  function handleChange(event) {
    const { name, value } = event.target
    setPerson({...person, [name]:value})
  }

  return (
    <div>
      <h1>New Contact</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div>
            <h3>First Name</h3>
            <input 
                type="firstName"
                name="firstName"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Last Name</h3>
            <input 
                type="lastName"
                name="lastName"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Street</h3>
            <input 
                type="street"
                name="street"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>City</h3>
            <input 
                type="city"
                name="city"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Gender</h3>
            <input 
                type="gender"
                name="gender"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Email</h3>
            <input 
                type="email"
                name="email"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Job Title</h3>
            <input 
                type="text"
                name="jobTitle"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Latitude</h3>
            <input 
                type="number"
                name="latitude"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Logitude</h3>
            <input 
                type="number"
                name="logitude"
                onChange={handleChange}
            />
        </div>
        <div>
            <h3>Favourite Colour</h3>
            <input 
                type="text"
                name="favouriteColour"
                onChange={handleChange}
            />
        </div>
        <div>
            <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

NewContactForm.propTypes = {
    update: PropTypes.func.isRequired
}

export default NewContactForm
