import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AddContact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    })

    const url = "https://boolean-uk-api-server.fly.dev/moueedAli/contact";

    const postContact = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData),
        })}

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postContact();
        navigate(`/`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create Contact</h2>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    />
                </label>
                <br />
                <label>
                    Street:
                    <input
                    type="text"
                    name="street"
                    onChange={handleChange}
                    value={formData.street}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    />
                </label>
                <br />
                <input
                    type="submit"
                    value="Create"
                />
            </form>
        </>
    );
}

export default AddContact;