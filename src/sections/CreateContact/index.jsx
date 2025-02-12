import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const initialData = {
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "",
    profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
  }

function CreateContact() {
  const navigate = useNavigate()
  const [person, setPerson] = useState(initialData);



  const handleChange = (event) => {
    event.preventDefault()

    const inputName = event.target.name
    const inputValue = event.target.value
    const inputType = event.target.type

    if(inputName === "firstName"){
      setPerson({...person, firstName: inputValue})
    }
    if(inputName === "lastName"){
        setPerson({...person, lastName: inputValue})
    }
    if(inputName === "city"){
        setPerson({...person, city: inputValue})
    }
    if(inputName === "street"){
        setPerson({...person, street: inputValue})
    }
    if(inputName === "gender"){
        setPerson({...person, gender: inputValue})
    }
    if(inputName === "email"){
        setPerson({...person, email: inputValue})
    }
    if(inputName === "jobTitle"){
        setPerson({...person, jobTitle: inputValue})
    }
    if(inputName === "latitude" && inputType === "number"){
        setPerson({...person, latitude: parseInt(inputValue)})
    }
    if(inputName === "longitude" && inputType === "number"){
        setPerson({...person, longitude: parseInt(inputValue)})
    }
    if(inputName === "favouriteColour"){
        setPerson({...person, favouriteColour: inputValue})
    }
    
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    

    fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(person),
    });

    navigate("/contacts");
  };



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Firstname</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={person.firstName}
      />
      <label htmlFor="lastName">Lastname</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={person.lastName}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={person.city}
      />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={person.street}
      />


<label htmlFor="gender">Gender</label>
      <input
        type="text"
        id="gender"
        name="gender"
        onChange={handleChange}
        value={person.gender}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={person.email}
      />
      <label htmlFor="jobTitle">Job title</label>
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        onChange={handleChange}
        value={person.jobTitle}
      />

<label htmlFor="latitude">Latitude</label>
      <input
        type="number"
        id="latitude"
        name="latitude"
        onChange={handleChange}
        value={person.latitude}
      />
      <label htmlFor="longitude">Longitude</label>
      <input
        type="number"
        id="longitude"
        name="longitude"
        onChange={handleChange}
        value={person.longitude}
      />
      <label htmlFor="favouriteColour">Favourite Colour</label>
      <input
        type="text"
        id="favouriteColour"
        name="favouriteColour"
        onChange={handleChange}
        value={person.favouriteColour}
      />
      
      <button type="submit">Submit Contact</button>
    </form>
  );
}

export default CreateContact;
