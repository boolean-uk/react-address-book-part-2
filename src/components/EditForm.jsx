import { useContext, useState } from "react"
import { ContactContext } from "../App"
import { useNavigate, useParams } from "react-router-dom"

export default function EditForm() {
    const { editContact, contacts } = useContext(ContactContext)
    const {id} = useParams();
    const contact = contacts.find((x) => x.id === Number(id))

    const [edited, setEdited] = useState(contact)
        
    const navigate = useNavigate()

    function handleChange(event){
        const {name, value} = event.target
        setEdited({...edited, [name]: value})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await editContact(edited)
        navigate('/contacts/' + edited.id)
    }

    return (
    <form onSubmit={handleSubmit}>
        <h2>Edit contact</h2>
        <img src={edited.profileImage} alt="" className="pic"/>
        <label>
            First name:
            <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={edited.firstName} />
        </label>
        <label>
            Last name:
            <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={edited.lastName} />
        </label>
        <label>
            Street:
            <input
            type="text"
            name="street"
            onChange={handleChange}
            value={edited.street} />
        </label>
        <label>
            City:
            <input
            type="text"
            name="city"
            onChange={handleChange}
            value={edited.city} />
        </label>
        <button type="submit">Save changes</button>
    </form>
    )
}