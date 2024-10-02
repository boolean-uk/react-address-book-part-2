import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateContact({ username }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {firstName, lastName, street, city};
    const url = `https://boolean-uk-api-server.fly.dev/${username}/contact`;
    fetch(url, {

        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    })
    .then(response => response.json())
    .then(() => {
        navigate('/dashboard');
    })
    .catch(error => console.error('Error creating contact:', error));
};

return (
    <div>
        <h1>Create a new contact</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required  />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required  />
        </div>
        <div>
            <label>Street</label>
            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required  />
        </div>
        <div>
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required  />
        </div>
        <button type="submit">Create Contact</button>
        </form>
    </div>
)

}

export default CreateContact;