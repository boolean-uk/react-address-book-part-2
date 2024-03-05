import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.css'

function CreateContact(props) {
    const { toggle, setToggle} = props
    const [contactInput, setContactInput] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        setContactInput({...contactInput, [event.target.name]: [event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("https://boolean-api-server.fly.dev/nora-hansen/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                firstName: `${contactInput.firstName}`,
                lastName: `${contactInput.lastName}`,
                street: `${contactInput.street}`,
                city: `${contactInput.city}`,
                gender: `${contactInput.gender}`,
                email: `${contactInput.email}`,
                jobTitle: `${contactInput.jobTitle}`,
                latitude: Number(contactInput.latitude),
                longitude: Number(contactInput.longitude),
            })
        })
        setToggle(toggle => !toggle)
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
                <label htmlFor="gender-input"><b>Gender</b></label>
                <input name="gender" id="gender-input" type="text" placeholder="Other" onChange={handleChange}/>
                <label htmlFor="email-input"><b>E-Mail</b></label>
                <input name="email" id="email-input" type="text" placeholder="email@email.com" onChange={handleChange}/>
                <label htmlFor="jobtitle-input"><b>Job Title</b></label>
                <input name="jobtitle" id="jobtitle-input" type="text" placeholder="Sqientist" onChange={handleChange}/>
                <label htmlFor="latitude-input"><b>Latitude</b></label>
                <input name="latitude" id="latitude-input" type="text" placeholder="0" onChange={handleChange}/>
                <label htmlFor="longitude-input"><b>Longitude</b></label>
                <input name="longitude" id="longitude-input" type="text" placeholder="0" onChange={handleChange}/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateContact