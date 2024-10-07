import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../../App";

function ContactForm(){
    const context = useContext(ContactContext)
    const navigate = useNavigate()
    const initialFormData = {
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newContact = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            street: formData.street,
            city: formData.city
        }


        const response = await fetch(context.url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newContact)
        })

        console.log("Response: ", response)

        await context.fetchContacts();

        setFormData(initialFormData)

        navigate("/");

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    return(
        <section>
            <form onSubmit={handleSubmit} className="contact-form">
            <h2>Create Contact</h2>
                <label>
                    <h3>First Name:</h3>
                </label>
                <input type="text" name="firstName" onChange={handleChange} value={formData.firstName}></input>
                <label>
                    <h3>Last Name:</h3>
                </label>
                <input type="text" name="lastName" onChange={handleChange} value={formData.lastName}></input>
                <label>
                    <h3>Street:</h3>
                </label>
                <input type="text" name="street" onChange={handleChange} value={formData.street}></input>
                <label>
                    <h3>City:</h3>
                </label>
                <input type="text" name="city" onChange={handleChange} value={formData.city}></input>
                <button className="create-button" type="submit">Create</button>
            </form>
        </section>
        

    );
}

export default ContactForm