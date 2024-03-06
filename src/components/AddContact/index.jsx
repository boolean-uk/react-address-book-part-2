import { useState } from "react"
import './style.css'

const initialPerson = {
    firstName: "",
    lastName: "",
    street: "",
    city: ""
}

function AddContact({ contacts, setContacts}){
    const [person, setPerson] = useState(initialPerson)

    function handleSubmit(event){
        event.preventDefault()
        //post request to api
        fetch("https://boolean-api-server.fly.dev/ThomasKva/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person)
        })
        .then(response => response.json())
        .then((addPerson) => {
            setContacts([...contacts, addPerson])
            //reset the form
            setPerson(initialPerson)
        }).catch((error) => console.error("Could not add contact: ", error))
    }

    function handleOnChange(event){
        const {name, value} = event.target
        setPerson({...person, [name]: value})
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
            <label htmlFor="firstName">First Name</label>
            <input type="text"
                id="firstName"
                name="firstName"
                onChange={handleOnChange}
                value={person.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                id="lastName"
                name="lastName"
                onChange={handleOnChange}
                value={person.lastName}
            />

            <label htmlFor="street">Street</label>
            <input type="text"
                id="street"
                name="street"
                onChange={handleOnChange}
                value={person.street}
            />

            <label htmlFor="city">City</label>
            <input type="text"
                id="city"
                name="city"
                onChange={handleOnChange}
                value={person.city}
            />

            <button type="submit" className="submit-button">Submit</button>
        </form>
    )
}

export default AddContact