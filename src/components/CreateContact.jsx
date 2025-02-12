import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateContact() {
    const navigate = useNavigate()

    const [newContact, setNewContact] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setNewContact((contact) => ({
            ...contact,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("https://boolean-uk-api-server.fly.dev/Marcus0410/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact)
        })
            .then(() => navigate("/"))
            .catch((err) => console.error("Error when creating contact:", err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" onChange={handleChange} />
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" onChange={handleChange} />
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" onChange={handleChange} />
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" onChange={handleChange} />
            <button type="submit">Create</button>
        </form>
    )
}
