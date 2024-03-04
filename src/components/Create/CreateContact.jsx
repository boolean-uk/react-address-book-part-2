import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function CreateContacts({ setContacts }) {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        gender: '',
        email: '',
        jobTitle: '',
        latitude: '',
        longitude: '',
        favouriteColour: '#000000',
        profileImage: ''
    });

    const location = useLocation();
    const updateContact = location.state?.updateContact

    useEffect(() => {
        if (updateContact)
        {
            setContact(updateContact)
        }
    }, [updateContact]);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault();
        if (updateContact)
        {
            setContacts(prevContacts =>
                prevContacts.map(p => p.email === contact.email ? contact : p)
            );
        } else
        {
            setContacts(prevContacts => [contact, ...prevContacts]);
        }
        navigate(`/${encodeURIComponent(contact.email)}`);
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Street:</label>
                <input
                    type="text"
                    name="street"
                    value={contact.street}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={contact.city}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Gender:</label>
                <select name="gender" value={contact.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Job Title:</label>
                <input
                    type="text"
                    name="jobTitle"
                    value={contact.jobTitle}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Latitude:</label>
                <input
                    type="number"
                    name="latitude"
                    value={contact.latitude}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Longitude:</label>
                <input
                    type="number"
                    name="longitude"
                    value={contact.longitude}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Favourite Colour:</label>
                <input
                    type="color"
                    name="favouriteColour"
                    value={contact.favouriteColour}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Profile Image URL:</label>
                <input
                    type="url"
                    name="profileImage"
                    value={contact.profileImage}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
CreateContacts.propTypes = {
    setContacts: PropTypes.func.isRequired,
};