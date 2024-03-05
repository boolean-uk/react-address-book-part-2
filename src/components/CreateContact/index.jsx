import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateContact(props) {
    const { contacts, setContacts } = props
    const [contactInput, setContactInput] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        setContactInput({...contactInput, [event.target.name]: [event.target.value]})
        console.log("input ", contactInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setContacts([...contacts, {...contactInput, id: Math.max(...contacts.map(c => c.id))+1}])
        navigate("/contactlist")
    }

    return(
        <div>
            <h1>Create Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name-input">First name</label> 
                <input name="firstName" id="first-name-input" type="text" placeholder="Jane" onChange={handleChange}/>
                <label htmlFor="last-name-input">Last name</label>
                <input name="lastName" id="last-name-input" type="text" placeholder="Doe" onChange={handleChange}/>
                <label htmlFor="street-input">Street</label>
                <input name="street" id="street-input" type="text" placeholder="123 Fake St" onChange={handleChange}/>
                <label htmlFor="city-input">City</label>
                <input name="city" id="city-input" type="text" placeholder="City McCityface" onChange={handleChange}/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateContact