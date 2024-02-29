import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NewContact(props)
{
    const { addContact } = props
    const INITIAL_CONTACT =
    {
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }
    const [newContact, setNewContact] = useState(INITIAL_CONTACT)

    const handleInput = (event) =>
    {
        const { name, value } = event.target
        setNewContact({...newContact, [name]: value})
    }
    const navigate = useNavigate()
    const handleClick = () =>
    {
        addContact({newContact})
        navigate("/")
    }

    return (
        <>
            <h1>New Contact</h1>

            <h2>First Name:</h2>
            <input type="text" name="firstName" value={newContact.firstName} onChange={handleInput}/>
            
            <h2>Last Name:</h2>
            <input type="text" name="lastName" value={newContact.lastName} onChange={handleInput}/>
            
            <h2>Street:</h2>
            <input type="text" name="street" value={newContact.street} onChange={handleInput}/>
            
            <h2>City:</h2>
            <input type="text" name="city" value={newContact.city} onChange={handleInput}/>

            <button onClick={handleClick}>Create</button>
        </>
    )
}