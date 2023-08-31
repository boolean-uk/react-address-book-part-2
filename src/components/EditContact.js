import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import DataContext from "../DataContext"

function EditContact() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { contacts, setContacts } = useContext(DataContext)
    const targetContact = contacts.find(c => c.id === Number(id))
    const [editedContact, setEditedContact] = useState(targetContact)
    const [editedAddress, setEditedAddress] = useState(targetContact.address)
    

    const handleChange = (event) => {
        const { name, value } = event.target
        if(event.target.name === "name") {
            setEditedContact({...editedContact,[name] : value})
        } else {
            setEditedAddress({...editedAddress,[name]:value})
            setEditedContact({...editedContact,address: editedAddress})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const filteredContacts = contacts.filter(c => c.id !== Number(id))
        filteredContacts.push(editedContact)
        console.log(filteredContacts)
        setContacts(filteredContacts)
        navigate("/contacts")
    }
    
    return(
        <div className="edit-contact-form">
            <h1>Edit Contact</h1>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <h2>{targetContact.name} </h2>
                <label>
                    Full name
                    <input type="text" name="name" onChange={handleChange} defaultValue={targetContact.name}></input>
                </label>
                <label>
                    City
                    <input type="text" name="city" onChange={handleChange} defaultValue={targetContact.address.city}></input>
                </label>
                <label>
                    Street
                    <input type="text" name="street" onChange={handleChange} defaultValue={targetContact.address.street}></input>
                </label>
                <label>
                    Zipcode
                    <input type="text" name="zipcode" onChange={handleChange} defaultValue={targetContact.address.zipcode}></input>
                </label>
                <input className="submit-button" type="submit" value="Submit Changes"/>
            </form>
        </div>
    )
}
export default EditContact