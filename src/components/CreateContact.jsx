import { useState } from "react"
import { useNavigate } from "react-router-dom"



function CreateContact({fetchContacts}) {
    const navigate = useNavigate()

    const [contactInfo, setContactInfo] = useState(
        {
            firstName: "",
            lastName: "",
            city: "",
            street: "",
            jobTitle: "",
            email: ""
        })

        function handleInput(e){
            const{name, value} = e.target
            setContactInfo({...contactInfo, [name]: value})
        }

        async function handleSubmit(event){
            event.preventDefault()

            const response = await fetch("https://boolean-api-server.fly.dev/Eddy1108/contact", {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(contactInfo)
            })

            if(!response) console.log("POST ERROR")
            

            setContactInfo({
                firstName: "",
                lastName: "",
                city: "",
                street: "",
                jobTitle: "",
                email: ""
            })

            fetchContacts()
            navigate("/contacts")
        }
  
    return (
    <div>
    <h2>Create Contact:</h2>
    <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input type="text" name="firstName" value={contactInfo.firstName} onChange={handleInput}/>
        </label>
        <br />
        <label>
            Last Name:
            <input type="text" name="lastName" value={contactInfo.lastName} onChange={handleInput}/>
        </label>
        <br />

        <label>
            City:
            <input type="text" name="city" value={contactInfo.city} onChange={handleInput}/>
        </label>
        <br />

        <label>
            Street:
            <input type="text" name="street" value={contactInfo.street} onChange={handleInput}/>
        </label>
        <br />

        <label>
            Job:
            <input type="text" name="jobTitle" value={contactInfo.job} onChange={handleInput}/>
        </label>
        <br />

        <label>
            Email:
            <input type="text" name="email" value={contactInfo.email} onChange={handleInput}/>
        </label>
        <br />

        <button type="submit">Submit</button>

    </form>
    
    <br />

    <button onClick={() => navigate("/")}>Back</button>
</div>
  )
}

export default CreateContact