import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';

function CreateUserForm() {

    const navigate = useNavigate()
    const {URL, user, fetchData} = useContext(userContext);

const [newUser, setNewUser] =  useState({
        firstName:'',
        lastName:'',
        city:'',
        street:''
    })

    const handlePOST = async (newuser) => {
        const response = await fetch(`${URL}/${user}/contact`, {
            method: 'POST',
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
        setNewUser({ ...newUser, [name]: value})
        console.log(newUser[name])
    }


    function handleSubmit(event) {
        const response = handlePOST(newUser);
        console.log(response)
        fetchData()
        navigate('/dashboard')
    }

    return (
        <form>
            <label> First Name:</label><br />
            <input type='text' id='firstName' name='firstName' onChange={handleChange}></input><br />

            <label> Last Name:</label><br />
            <input type='text' id='lastName' name='lastName' onChange={handleChange}></input><br />

            <label> City:</label><br />
            <input type='text' id='city' name='city' onChange={handleChange}></input><br />

            <label>Street</label><br />
            <input type='text' id='street' name='street' onChange={handleChange}></input><br /> 

            <button type='submit' onClick={handleSubmit}>Create</button>
        </form>
    )
}

export default CreateUserForm
