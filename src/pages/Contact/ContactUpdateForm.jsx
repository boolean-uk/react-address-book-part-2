import { useState, useEffect } from 'react'
import { useContext } from "react"
import { MyContext } from '../../App'
import {useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ContactUpdateForm() {
  const navigate = useNavigate()
  const [contact, setContact] = useState(null)
  const { contacts } = useContext(MyContext)

  const { id } = useParams();

  useEffect(() => {

    if(contacts && id){
        const matchingContact = contacts.find((contact) => {
         return Number(contact.id) === Number(id)
    })
    setContact(matchingContact)
    }
    
}, [contacts, id])

console.log(contact)
console.log(id)


const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value

    const inputNumber = event.target.valueAsNumber

    if(inputName == "firstName"){
        setContact({...contact, firstName: inputValue})
    }
    else if(inputName == "lastName"){
        setContact({...contact, lastName: inputValue})
    }
    else if(inputName == "street"){
        setContact({...contact, street: inputValue})
    }
    else if(inputName == "city"){
        setContact({...contact, city: inputValue})
    }
    else if(inputName == "gender"){
        setContact({...contact, gender: inputValue})
    }
    else if(inputName == "jobTitle"){
        setContact({...contact, jobTitle: inputValue})
    }
    else if(inputName == "email"){
        setContact({...contact, email: inputValue})
    }
    else if(inputName == "favouriteColour"){
        setContact({...contact, favouriteColour: inputValue})
    }
    else if(inputName == "latitude"){
        setContact({...contact, latitude: inputNumber})
    }
    else if(inputName == "longitude"){
        setContact({...contact, longitude: inputNumber})
    }
}
    
if (!contact) return <div>Loading...</div>;

  function handleSubmit(event) {
    event.preventDefault()


    fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact/${contact.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(contact)

      })
      

    navigate(`/contact/${contact.id}`);
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName' >First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={contact.firstName}
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={contact.lastName}
      />
      <label htmlFor='street'>Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={contact.street}
      />
      <label htmlFor='city'>City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={contact.city}
      />
      <label htmlFor='gender'>Gender</label>
      <input
        type="text"
        id="gender"
        name="gender"
        onChange={handleChange}
        value={contact.gender}
      />
      <label htmlFor='jobTitle'>Job Title</label>
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        onChange={handleChange}
        value={contact.jobTitle}
      />
      <label htmlFor='email'>Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={contact.email}
      />
      <label htmlFor='favouriteColour'>Favourite Colour</label>
      <input
        type="text"
        id="favouriteColour"
        name="favouriteColour"
        onChange={handleChange}
        value={contact.favouriteColour}
      />
      <label htmlFor='latitude'>Latitude</label>
      <input
        type="number"
        id="latitude"
        name="latitude"
        onChange={handleChange}
        value={contact.latitude}
      />
      <label htmlFor='longitude'>Longitude</label>
      <input
        type="number"
        id="longitude"
        name="longitude"
        onChange={handleChange}
        value={contact.longitude}
      />
      <button type="submit">Update</button>
    </form>
  )
}

export default ContactUpdateForm
