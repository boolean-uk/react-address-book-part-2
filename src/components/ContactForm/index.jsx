import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles.css"


function ContactForm({contact}) {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        city: "",
        street: "",
        email: "",
        profileImage: ""
    })

    useEffect(() =>{
        if(contact !== undefined){
            setContactInfo(contact)
    }},[])

    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setContactInfo({...contactInfo, [name]: value, profileImage: `https://www.gravatar.com/avatar/${contactInfo
    .email}?s=120&d=identicon`})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(contactInfo)
        //Update 
        if (contact){
        try {
            const res = await fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/${contact.id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(contactInfo)
            })
            console.log(res.json)
            if(res.ok) {
                console.log("success contact updated")
                navigate("/contacts")
            } else{
                console.error("Failed to update contact")
            }
        }
        catch (error){
            console.error('Error:', error)
        }
    }
    

        // Add new

        else{
        try {
            const res = await fetch("https://boolean-api-server.fly.dev/AxelHan/contact", {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(contactInfo)
            })
            console.log(res.json)
            if(res.ok) {
                console.log("success contact added")
                navigate("/contacts")
            } else{
                console.error("Failed to add contact")
            }
        }
        catch (error){
            console.error('Error:', error)
        }
    }
    }

  return (
    <form onSubmit={handleSubmit} className="contact-form-container">
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
            <li>
          {/* File input for image upload */}
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={contactInfo.email}
            onChange={handleChange}
          />
        </li>
        {contact ? <input type="submit" value="Update Contact"></input> : <input type="submit" value="Add Contact"></input>}
            
        </ul>
     

    </form>
    
    )
}

export default ContactForm