import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AddContactForm(props) {
    const { addContact } = props;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        jobTitle: "",
        street: "",
        city: "",
        latitude: 71.170928,
        longitude: 25.783561,
        favouriteColour: "#111111",
        profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await addContact(formData);
        if (success) {
            navigate("/");
        } else {
            console.error("Failed to add contact");
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

            <button type="submit">Add</button>
        </form>
    )
}

AddContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default AddContactForm;