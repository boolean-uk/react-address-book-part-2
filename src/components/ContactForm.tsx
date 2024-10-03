
import React, { useState } from "react"

interface ContactFormProps {
    onContactUpdate: (updatedContacts) => void
    setCurrentView: (viewId: number) => void
}

const ContactForm = ({ onContactUpdate, setCurrentView }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prevData) => ({ ...prevData, [name]: value}))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const contactData = {
            ...formData,
            gender: "Not specified",
            email: "example@example.com",
            jobTitle: "Not specified",
            latitude: 0,
            longitude: 0,
            favouriteColour: '#fff',
            profileImage: "https://www.gravatar.com/avatar/example@example.com?s=120&d=identicon"
        }

        try {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/Stian96/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            })

            if (!response.ok) {
                throw new Error('Failed to send POST request...')
            }
            const result = await response.json()
            onContactUpdate((prevContacts) => [...prevContacts, result])
        }
        catch (error) {
            console.error(`Failed to send the data: ${error}`)
        }
        finally {
            resetFormData()
            setCurrentView(1)
        }
    }

    const resetFormData = () => {
        setFormData({
            firstName: "",
            lastName: "",
            street: "",
            city: ""
        });
    }

    return (
        <div className="contact-form-container">
            <h2>Create New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Save Contact
                </button>
            </form>
        </div>
    )
}

export default ContactForm