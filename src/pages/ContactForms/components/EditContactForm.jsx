import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function EditContactForm(props) {
    const { contact, updateContact } = props;
    const navigate = useNavigate();

    // Initialize formData with an empty object {}
    const [formData, setFormData] = useState(contact || {})

    useEffect(() => {
        // Check if contact is not null before setting formData
        if (contact) {
            setFormData(contact);
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await updateContact(formData.id, formData);
        if (success) {
            navigate("/");
        } else {
            console.error("Failed to update contact");
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name:</label>
            <input type="text" name="firstName" id="firstName" placeholder="firstName" required onChange={handleChange} value={formData.firstName} />

            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="lastName" id="lastName" placeholder="lastName" required onChange={handleChange} value={formData.lastName} />

            <label htmlFor="street">Street:</label>
            <input type="text" name="street" id="street" placeholder="street" required onChange={handleChange} value={formData.street} />

            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" placeholder="city" required onChange={handleChange} value={formData.city} />

            <label htmlFor="gender">Gender:</label>
            <input type="text" name="gender" id="gender" placeholder="gender" required onChange={handleChange} value={formData.gender} />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="email" required onChange={handleChange} value={formData.email} />

            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" name="jobTitle" id="jobTitle" placeholder="jobTitle" required onChange={handleChange} value={formData.jobTitle} />

            <label htmlFor="latitude">Latitude:</label>
            <input type="text" name="latitude" id="latitude" placeholder="latitude" required onChange={handleChange} value={formData.latitude} />

            <label htmlFor="longitude">Longitude:</label>
            <input type="text" name="longitude" id="longitude" placeholder="longitude" required onChange={handleChange} value={formData.longitude} />

            <label htmlFor="favouriteColour">Favourite Colour (hex):</label>
            <input type="text" name="favouriteColour" id="favouriteColour" placeholder="favouriteColour" required onChange={handleChange} value={formData.favouriteColour} />

            <label htmlFor="profileImage">Profile image (link):</label>
            <input type="text" name="profileImage" id="profileImage" placeholder="profileImage" required onChange={handleChange} value={formData.profileImage} />

            <button type="submit">Edit</button>
        </form>
    );
}

EditContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    updateContact: PropTypes.func.isRequired,
};

export default EditContactForm;