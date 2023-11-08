import { useState } from "react"
import { URL, get, post } from "../ultity/client"
import { useNavigate } from "react-router-dom"

function NewContact() {

    const navigate = useNavigate()

    const [newContact, setNewContact] = useState(
        {
            firstName: '',
            lastName: '',
            city: '',
            street: ''
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewContact({ ...newContact, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        post(`${URL}`, newContact)
        .then((res)=> res.json())
        .then(get(URL))
        .then(navigate("/contacts"))
    }

    return (
        <>
            <form 
            className="newContactForm"
            onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:
                    <input
                        value={newContact.firstName}
                        type="text"
                        name="firstName"
                        onChange={(event) => { handleChange(event,) }} />
                </label><br />
                <label htmlFor="lastName">Last Name:
                    <input
                        value={newContact.lastName}
                        type="text"
                        name="lastName"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <label htmlFor="city">City:
                    <input
                        value={newContact.city}
                        type="text"
                        name="city"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <label htmlFor="street">Street:
                    <input
                        value={newContact.street}
                        type="text"
                        name="street"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <button 
                type="submit"
                > Add New Contact
                    </button>
            </form>
        </>
    )
}

export default NewContact