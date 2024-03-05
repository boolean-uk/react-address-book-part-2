import { useState } from "react"
import './style.css'

function AddContact({ contacts, setContacts}){
    const [person, setPerson] = useState({})

    function handleSubmit(event){
        event.preventDefault()
        console.log(person)

        setContacts([...contacts, person])
        console.log(contacts)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
            <label htmlFor="firstName">First Name</label>
            <input type="text"
                id="firstName"
                name="firstName"
                onChange={e => setPerson({...person, firstName: e.target.value})}
            />

            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                id="lastName"
                name="lastName"
                onChange={e => setPerson({...person, lastName: e.target.value})}
            />

            <label htmlFor="street">Street</label>
            <input type="text"
                id="street"
                name="street"
                onChange={e => setPerson({...person, street: e.target.value})}
            />

            <label htmlFor="city">City</label>
            <input type="text"
                id="city"
                name="city"
                onChange={e => setPerson({...person, city: e.target.value})}
            />

            <button type="submit" className="submit-button">Submit</button>
        </form>
    )
}

export default AddContact