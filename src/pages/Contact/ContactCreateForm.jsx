import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function ContactCreateForm() {
  const navigate = useNavigate()

  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "",
    profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
});

const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value

    const inputNumber = event.target.valueAsNumber

    if(inputName == "firstName"){
        setNewContact({...newContact, firstName: inputValue})
    }
    else if(inputName == "lastName"){
        setNewContact({...newContact, lastName: inputValue})
    }
    else if(inputName == "street"){
        setNewContact({...newContact, street: inputValue})
    }
    else if(inputName == "city"){
        setNewContact({...newContact, city: inputValue})
    }
    else if(inputName == "gender"){
        setNewContact({...newContact, gender: inputValue})
    }
    else if(inputName == "jobTitle"){
        setNewContact({...newContact, jobTitle: inputValue})
    }
    else if(inputName == "email"){
        setNewContact({...newContact, email: inputValue})
    }
    else if(inputName == "favouriteColour"){
        setNewContact({...newContact, favouriteColour: inputValue})
    }
    else if(inputName == "latitude"){
        setNewContact({...newContact, latitude: inputNumber})
    }
    else if(inputName == "longitude"){
        setNewContact({...newContact, longitude: inputNumber})
    }
}
    


  function handleSubmit(event) {
    event.preventDefault()

    fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newContact)
      })

    navigate("/contacts");
  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName' >First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={newContact.firstName}
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={newContact.lastName}
      />
      <label htmlFor='street'>Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={newContact.street}
      />
      <label htmlFor='city'>City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={newContact.city}
      />
      <label htmlFor='gender'>Gender</label>
      <input
        type="text"
        id="gender"
        name="gender"
        onChange={handleChange}
        value={newContact.gender}
      />
      <label htmlFor='jobTitle'>Job Title</label>
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        onChange={handleChange}
        value={newContact.jobTitle}
      />
      <label htmlFor='email'>Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={newContact.email}
      />
      <label htmlFor='favouriteColour'>Favourite Colour</label>
      <input
        type="text"
        id="favouriteColour"
        name="favouriteColour"
        onChange={handleChange}
        value={newContact.favouriteColour}
      />
      <label htmlFor='latitude'>Latitude</label>
      <input
        type="number"
        id="latitude"
        name="latitude"
        onChange={handleChange}
        value={newContact.latitude}
      />
      <label htmlFor='longitude'>Longitude</label>
      <input
        type="number"
        id="longitude"
        name="longitude"
        onChange={handleChange}
        value={newContact.longitude}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default ContactCreateForm
