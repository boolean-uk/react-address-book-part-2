import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.css'

function CreateContact(props) {
    const { contacts, setContacts } = props
    const [contactInput, setContactInput] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        setContactInput({...contactInput, [event.target.name]: [event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setContacts([...contacts, {...contactInput, id: Math.max(...contacts.map(c => c.id))+1}])
        console.log(contacts)
        fetch("https://boolean-api-server.fly.dev/nora-hansen/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                firstName: `${contactInput.firstName}`,
                lastName: `${contactInput.lastName}`,
                street: `${contactInput.street}`,
                city: `${contactInput.city}`,
            })
        })
        navigate("/contactlist")
    }

    return(
        <div>
            <h1>Create Contact</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <label htmlFor="first-name-input"><b>First name</b></label> 
                <input name="firstName" id="first-name-input" type="text" placeholder="Jane" onChange={handleChange}/>
                <label htmlFor="last-name-input"><b>Last name</b></label>
                <input name="lastName" id="last-name-input" type="text" placeholder="Doe" onChange={handleChange}/>
                <label htmlFor="street-input"><b>Street</b></label>
                <input name="street" id="street-input" type="text" placeholder="123 Fake St" onChange={handleChange}/>
                <label htmlFor="city-input"><b>City</b></label>
                <input name="city" id="city-input" type="text" placeholder="City McCityface" onChange={handleChange}/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateContact