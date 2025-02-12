import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm({ initialData, onSubmit, refreshContacts }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            await onSubmit(formData);
        } else {
            const response = await fetch('https://boolean-uk-api-server.fly.dev/josteinlaa/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                refreshContacts();
                navigate('/');
            }
        }
    };

    return (
        <div>
            <h1>{initialData ? 'Update Contact' : 'Add New Contact'}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                <br />
                <label htmlFor="street">Street:</label>
                <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} />
                <br />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                <br />
                <button type="submit">{initialData ? 'Update Contact' : 'Add Contact'}</button>
            </form>
        </div>
    );
}