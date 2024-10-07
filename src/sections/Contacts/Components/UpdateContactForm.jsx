import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../../../App";

function UpdateContactForm(){
    const context = useContext(ContactContext)
    const navigate = useNavigate()
    const { id } = useParams();
    const thisContact = context.contacts.find((x) => x.id == id);

    const initialFormData = {
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    const [formData, setFormData] = useState(thisContact)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updateContact = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            street: formData.street,
            city: formData.city
        }

        if(thisContact){
            const response = await fetch(`${context.url}/${id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(updateContact)
            })

            console.log("Update Response: ", response)
        }

        await context.fetchContacts();

        setFormData(initialFormData)

        navigate(`/contact/view/${id}`);

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
                <button className="create-button" type="submit">Update</button>
            </form>
        </section>
        

    );
}

export default UpdateContactForm