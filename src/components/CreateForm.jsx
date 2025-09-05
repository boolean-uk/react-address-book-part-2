import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContactContext } from "../App"

const initialContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  gender: "unknown",
  email: "",
  jobTitle: "",
  latitude: 0,
  longitude: 0,
  favouriteColour: "#ffffffff",
  profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
}

export default function CreateForm() {
    const { addContact } = useContext(ContactContext)
    const [contact, setContact] = useState(initialContact)
        
    const navigate = useNavigate()

    function handleChange(event){
        const {name, value} = event.target
        setContact({...contact, [name]: value})
    }

    
     const handleSubmit = async (e) => {
        e.preventDefault()
        await addContact(contact)
        navigate('/')
    }

    return (
    <form onSubmit={handleSubmit}>
        <h2>Create new Contact</h2>
        <img src={contact.profileImage} alt="" className="pic"/>
        <label>
            First name: 
            <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={contact.firstName} />
        </label>
        <label>
            Last name: 
            <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={contact.lastName} />
        </label>
        <label>
            Street: 
            <input
            type="text"
            name="street"
            onChange={handleChange}
            value={contact.street} />
        </label>
        <label>
            City: 
            <input
            type="text"
            name="city"
            onChange={handleChange}
            value={contact.city} />
        </label>
        <button type="submit">Add contact</button>
    </form>
    )
}