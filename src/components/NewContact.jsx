import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NewContact(props)
{
    const { addContact } = props
    const CONTACT =
    {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        email: "",
        profileImage: ""
    }
    const [newContact, setNewContact] = useState(CONTACT)


    const handleInput = (event) =>
    {
        const { name, value } = event.target
        setNewContact({...newContact, [name]: value})
    }
    const navigate = useNavigate()

    const handleClick = () =>
    {
        navigate("/")
        addContact({newContact})
    }

    return (
        <>
        <div className="container">
            <h1>New Contact</h1>

            <h3>First Name:</h3>
            <input type="text" name="firstName" value={newContact.firstName} onChange={handleInput}/>

            <h3>Last Name:</h3>
            <input type="text" name="lastName" value={newContact.lastName} onChange={handleInput}/>

            <h3>Street:</h3>
            <input type="text" name="street" value={newContact.street} onChange={handleInput}/>

            <h3>City:</h3>
            <input type="text" name="city" value={newContact.city} onChange={handleInput}/>

            <h3>Email:</h3>
            <input type="text" name="email" value={newContact.email} onChange={handleInput}/>

            <button onClick={handleClick} className="btn">Create</button>
            </div>
        </>
    )
}