import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditContact({ username }) {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setContact(data);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setStreet(data.street);
                setCity(data.city);
            })
            .catch(error => console.error('Error fetching contact details:', error));
    }, [username, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = { firstName, lastName, street, city };

        const url = `https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedContact),
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/dashboard/${id}`);
            })
            .catch(error => console.error('Error updating contact:', error));
    };

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Street:</label>
                    <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Contact</button>
            </form>
        </div>
    );
}

export default EditContact;