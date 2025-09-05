import React, { useState } from 'react'
import { useContext } from 'react'
import { userContext } from '../../../App'
import { useLocation, useNavigate } from 'react-router-dom'

function UpdateUser() {

  const {user, fetchData, URL} = useContext(userContext)
  const navigate = useNavigate()
  const location = useLocation();
  const contact = location.state?.contact.userById;

  const [updateContact, setUpdateContact] = useState({
    firstName : contact.firstName,
    lastName : contact.lastName,
    city : contact.city,
    street : contact.street
  })

  const handlePUT = async (newuser) => {
        const response = await fetch(`${URL}/${user}/contact/${contact.id}`, {
            method: 'PUT',
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newuser),
        });

        const result = await response.json();
        return result
    }

  const handleChange = event => {
        const { name, value, type } = event.target;
        setUpdateContact({ ...updateContact, [name]: value})
        console.log(updateContact[name])
    }
    function handleSubmit(event) {
        const response = handlePUT(updateContact);
        console.log(response)
        fetchData();
        navigate(`/dashboard`)
    }

  return (
    <div>
        <form >
            <label> First Name:</label><br />
            <input type='text' id='firstName' name='firstName' value={updateContact.firstName} onChange={handleChange}></input><br />

            <label> Last Name:</label><br />
            <input type='text' id='lastName' name='lastName' value={updateContact.lastName} onChange={handleChange}></input><br />

            <label> City:</label><br />
            <input type='text' id='city' name='city' value={updateContact.city} onChange={handleChange}></input><br />

            <label>Street</label><br />
            <input type='text' id='street' name='street' value={updateContact.street} onChange={handleChange}></input><br /> 

            <button type='submit' onClick={handleSubmit}>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser
