import { useState, useEffect, useContext } from "react"
import { ContactContext } from "../App"
import { useNavigate, useParams } from 'react-router-dom'


function AddContactForm() {
    const initialFormData = {
        id: "",
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const { contacts, setContacts, nextId, setNextId } = useContext(ContactContext)
    const navigate = useNavigate()
    const { id } = useParams()

    // If id is not undefined, we will auto fill the form with old data...
    useEffect(() => {
        if (contacts && id) {
            const co = contacts.find((c) => Number(c.id) === Number(id));
            const updateForm = {
                id: Number(id),
                firstName: co.firstName,
                lastName: co.lastName,
                street: co.street,
                city: co.city
            }
            setFormData(updateForm)
        }
    }, [contacts, id])

    const updateContact = () => {
        // Update the existing contact...
        const newContacts = contacts.map((c) => {
            if (c.id === Number(id)) {
                return formData
            } else {
                return c
            }
        })

        // Update the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/contact/${id}`, {
            method: "PUT",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        // Set the new contacts... reset the form...
        setContacts(newContacts)
        setFormData(initialFormData)
    }

    const createContact = () => {
        // Get the next available id and increment it after...
        const data = {...formData, id: nextId}
        setNextId(nextId + 1)

        // Post the answer to the database...
        fetch("https://boolean-uk-api-server.fly.dev/tvaltn/contact", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        // Update the contacts array and reset the form....
        setContacts([...contacts, data])
        setFormData(initialFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if we are updating or adding a new contact...
        if (formData.id !== "") {
            updateContact()
            // Navigate back to contact
            navigate(`/view/${id}`)
        } else {
            createContact()
            // Navigate back to root
            navigate("/")
        }

      };
    

    const handleChange = (event) => {
        const {name, value } = event.target 
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="contactsForm">
            <h2>Create Contact</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label>First Name
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required/>
                </label>
                <label>Last Name
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required/>
                </label>
                <label>Street
                    <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required/>
                </label>
                <label>City
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required/>
                </label>
                <input className="formSubmit" type="submit" value="Create"/>
            </form>
        </section>
    )
}

export default AddContactForm