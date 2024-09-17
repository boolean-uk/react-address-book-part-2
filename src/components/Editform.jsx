/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"



function EditForm() {
    const location = useLocation()
    const contact = location.state
    const [userData, setUserData] = useState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city,
        id: contact.id
    })

  


    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      };
      



    const editForm = (event) => {
        event.preventDefault()
        console.log('update form')
        console.log('data being sent', userData)

        const options = {

            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(userData)
        }

        fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/contact/${contact.id}`, options)
          .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('they is an error getting response form the server')
            }
          })

          .then((data) => console.log('this is the response from the server', data))
          navigate(-1)
    }

    return (
        <>
          <form className="editform" onSubmit={editForm} >
                <h1> Edit Contact</h1>
                <label htmlFor="firstname">
                    First Name: <br />
                    <input type="text" name="firstName" value={userData.firstName} onChange={handleChange}/> <br />
                </label>

                <label className="labels" htmlFor="lastname" >
                    Last Name: <br />
                    <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
                </label> <br />

                <label className="labels" htmlFor="street" >
                    Street Name: <br />
                    <input type="text" name="street" value={userData.street} onChange={handleChange} />
                </label> <br />

                <label className="labels" htmlFor="city">
                    City Name:  <br />
                    <input type="text" name="city" value={userData.city}  onChange={handleChange}/>
                </label> <br />

                <button type="submit"> Update Form </button>
          </form>
         
        </>
    )
}

export default EditForm