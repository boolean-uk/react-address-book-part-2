import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditContact(props)
{
    const { id } = useParams()
    const { contacts, editContact } = props
    const contact = contacts[id - 1]

    const CONTACT =
    {
        firstName: contact.firstName,

        lastName: contact.lastName,

        street: contact.street,

        city: contact.city,

        email: contact.email,

        id: contact.id
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
        editContact({newContact})
        navigate(`/contacts/${contact.id}`)
    }

    return (
        <>
        <div className="container">
            <h2>Edit Contact</h2>
            <h3>First Name:</h3>
            <input type="text" name="firstName" value={newContact.firstName}
             onChange={handleInput} className="input-text"/>
            <h3>Last Name:</h3>
            <input type="text" name="lastName" value={newContact.lastName} 
            onChange={handleInput} className="input-text"/>
            <h3>Street:</h3>
            <input type="text" name="street" value={newContact.street} 
            onChange={handleInput} className="input-text"/>
            <h3>City:</h3>
            <input type="text" name="city" value={newContact.city} 
            onChange={handleInput} className="input-text"/>
            <h3>Email:</h3>
            <input type="text" name="email" value={newContact.email} 
            onChange={handleInput} className="input-text"/>
            <button className="btn" onClick={handleClick}>Save</button>
            </div>
        </>
    )
}