import { useState } from "react"
import { useNavigate } from "react-router-dom"


function ContactForm({updateContacts}) {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        city: "",
        street: ""
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setContactInfo({...contactInfo, [name]: value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(contactInfo)

        try {
            const res = await fetch("https://boolean-api-server.fly.dev/AxelHan/contact", {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(contactInfo),
            })

            if(res.ok) {
                console.log("succes contact added")
                updateContacts()
                navigate("/contacts")
            } else{
                console.error("Failed to add contact")
            }
        }
        catch (error){
            console.error('Error:', error)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label>
                    First Name: 
                </label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={contactInfo.firstName}
                onChange={handleChange}
                />
            </li>
            <li>
                <label>
                    Last Name: 
                </label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={contactInfo.lastName}
                onChange={handleChange}
                />
            </li>
            <li>
                <label>
                    City: 
                </label>
                <input
                type="text"
                id="city"
                name="city"
                value={contactInfo.city}
                required
                onChange={handleChange}
                />
            </li>
            <li>
                <label>
                    Street: 
                </label>
                <input
                type="text"
                id="street"
                name="street"
                required
                value={contactInfo.street}
                onChange={handleChange}
                />
            </li>
            <input type="submit" value="Add Contact"></input>
        </ul>
     

    </form>
    
    )
}

export default ContactForm