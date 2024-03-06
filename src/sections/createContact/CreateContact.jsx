import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LeftMenu from "../leftMenu/LeftMenu"
import "./CreateContact.css"

function CreateContact (){
    
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        fetch('https://boolean-api-server.fly.dev/StianNordvik/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate('/'))
    }

    const navigate = useNavigate();

    return (
        <div className="createContactContainer">
        <LeftMenu />
        <div className="createContact">
            <h1>Create Contact</h1>
            <form className="contactForm" onSubmit={handleFormSubmit}>
                <p><label htmlFor="firstName">First Name:</label></p>
                <p><input type="text" name="firstName" id="firstName" value={form.firstName} onChange={handleFormChange} /></p>
                <p><label htmlFor="lastName">Last Name:</label></p>
                <p><input type="text" name="lastName" id="lastName" value={form.lastName} onChange={handleFormChange} /></p>
                <p><label htmlFor="street">Street:</label></p>
                <p><input type="text" name="street" id="street" value={form.street} onChange={handleFormChange} /></p>
                <p><label htmlFor="city">City:</label></p>
                <p><input type="text" name="city" id="city" value={form.city} onChange={handleFormChange} /></p>
                <p><button type="submit" className="btnCreate">Create</button></p>
            </form>
        </div>
        </div>
    )
}

export default CreateContact