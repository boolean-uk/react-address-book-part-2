/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

function CreateView() {
  const newContact = {
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  }
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()

  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault()


    newContact.firstName = firstName;
    newContact.lastName = lastName;
    newContact.street = street;
    newContact.city = city;

    console.log(newContact)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact)
    };


    fetch('https://boolean-uk-api-server.fly.dev/fanden/contact', requestOptions)
      .then(response => response.json())
      .then(response => console.log(response))
    navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First name</label><br></br>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={e => setFirstName(e.target.value)}
        /><br></br>

        <label htmlFor="lastName">Last name</label><br></br>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={e => setLastName(e.target.value)}
        /><br></br>

        <label htmlFor="street">Street</label><br></br>
        <input
          type="text"
          id="street"
          name="street"
          onChange={e => setStreet(e.target.value)}
        /><br></br>

        <label htmlFor="city">City</label><br></br>
        <input
          type="text"
          id="city"
          name="city"
          onChange={e => setCity(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <Link to="/">Back</Link>
    </>
  )
}

export default CreateView
