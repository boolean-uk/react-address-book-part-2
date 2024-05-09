import { useState } from "react"

export default function CreateContact ({contacts, setContacts}) {
    const [contact, setContact] = useState({})

    function handleSubmit (event) {
        event.preventDefault()
        console.log("submitted")
        contact.id = contacts.length + 1
        // console.log(contact)
        // setContact({...contact, id: contacts.length + 1})

        // make a post request then setContacts
        fetch("https://boolean-uk-api-server.fly.dev/Alistair1080/contact", {
        method: "POST",
        body: JSON.stringify(
            contact),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(
                setContacts([...contacts, contact])
                // setContact({})
            )
            .then(
                setContact({})
            )


        // setContacts([...contacts, contact])
        // setContact({})
    }

    function handleChange (event) {
        // console.log(contact)
        const { id, value } = event.target
        
        setContact({...contact, [id]: value})
    }

    return (
        <div>
            <h2>Contact list</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={contact.firstName} onChange={handleChange}/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={contact.lastName} onChange={handleChange}/>
                <label htmlFor="street">Street:</label>
                <input type="text" id="street" value={contact.street} onChange={handleChange}/>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" value={contact.city} onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}