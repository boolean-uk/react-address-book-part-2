import { ContactContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function NewContactForm(){
    const contactContext = useContext(ContactContext)
    const navigate = useNavigate()

    const [newContact, setNewContact] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewContact({
            ...newContact,
            [name]: value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault()
        contactContext.setContacts([...contactContext.contacts, newContact])
        try {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/robin-ka/contact" , {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(newContact)
            })

            const updatedContact = await response.json()
            contactContext.setContacts([...contactContext.contacts, updatedContact])
            navigate("/");
        } catch (error) {
            console.log(error)
        }
        
    }

    return (

        <>
        
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={newContact.firstName}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={newContact.lastName}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    value={newContact.street}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={newContact.city}
                    onChange={handleInputChange}
                />
                <br />
                <button type="submit">Create New Contact</button>
            </form>
        
        </>

    )


}


export default NewContactForm