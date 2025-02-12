import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact() {
    const [contactData, setContactData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })
    const navigate = useNavigate();
    
    function handleChange(event) {
        const inputName = event.target.name;
        const inputVlaue = event.target.value;

        if (inputName === 'first') {
            setContactData({...contactData, firstName: inputVlaue});
        }

        if (inputName === 'last') {
            setContactData({...contactData, lastName: inputVlaue});
        }

        if (inputName === 'street') {
            setContactData({...contactData, street: inputVlaue});
        }

        if (inputName === 'city') {
            setContactData({...contactData, city: inputVlaue});
        }
    }

    const createContact = async (contact) => {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/anselin-thefirst/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact),
        });
        if (!response.ok) throw new Error('Failed to create new contact');
        return await response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createContact(contactData)
            .then (console.log(contactData))
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Create a contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first">
                    First Name:
                    <input 
                    type="text"
                    name="first"
                    value={contactData.firstName}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="last">
                    Last Name:
                    <input 
                    type="text"
                    name="last"
                    value={contactData.lastName}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="street">
                    Street:
                    <input 
                    type="text"
                    name="street"
                    value={contactData.street}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="city">
                    City:
                    <input 
                    type="text"
                    name="city"
                    value={contactData.city}
                    onChange={handleChange}
                    required />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default CreateContact;