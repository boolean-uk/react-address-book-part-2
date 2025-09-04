import { useState } from "react";

function ContactForm({ onAddContact }) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        gender: "Male",
        email: "rick@sanchez.com",
        jobTitle: "Scientist",
        latitude: 42,
        longitude: 629,
        favouriteColour: "#0d7f26",
        profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://boolean-uk-api-server.fly.dev/mariehhansen/contact", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        });

        if (response.ok) {
            const newContact = await response.json();
            onAddContact(newContact);
            setFormData({ firstName: "", lastName: "", street: "", city: "" });
        } else {
            console.error('Could not add contact');
        }
    };

    return (
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Create Contact</h2> 
                <ul>
                <li>
                <label>
                    First Name
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                </li>
                <li>
                <label>
                    Last Name
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                </li>
                <li>
                <label>
                    Street
                    <input
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        required
                    />
                </label>
                </li>
                <li>
                <label>
                    City
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                </li>
                <li>
                <input type="submit" value="Create" />
                </li>
                </ul>
            </form>
            
        </section>
    )
}

export default ContactForm;