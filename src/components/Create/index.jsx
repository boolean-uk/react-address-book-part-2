import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Create(){
    const [person] = useState({})

    const url = "https://boolean-api-server.fly.dev/Miadog7Extra/contact/"

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        if (person !== undefined) {
            person.firstName = firstName
            person.lastName = lastName
            person.street = street
            person.city = city
        console.log(person)
        fetch(`${url}`,
        {method: 'POST',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify(person),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        }
        navigate(`/contact`)
    }

    {
        return(
            <>
            <h1>Add contact </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={e => setStreet(e.target.value)}
                    value={street}
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                />
                <button type="submit">Create Contact</button>
                </form>
            </>
        )
    }
}
export default Create