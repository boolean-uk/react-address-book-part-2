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
        setContacts(filteredContacts)
        navigate("/contacts")
    }
    
    return(
        <div className="edit-contact-form">
            <form onSubmit={handleSubmit}>
                <h1>Edit {targetContact.name} </h1>
                <label>
                    Full name
                    <input type="text" name="name" onChange={handleChange}></input>
                </label>
                <label>
                    City
                    <input type="text" name="city" onChange={handleChange}></input>
                </label>
                <label>
                    Street
                    <input type="text" name="street" onChange={handleChange}></input>
                </label>
                <label>
                    Zipcode
                    <input type="text" name="zipcode" onChange={handleChange}></input>
                </label>
                <input className="submit-button" type="submit" value="Submit Changes"/>
            </form>
        </div>
    )
}
export default EditContact