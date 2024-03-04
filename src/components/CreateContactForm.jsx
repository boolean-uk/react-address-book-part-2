import {useState} from 'react';


function AddContactForm({onAddContact}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://boolean-api-server.fly.dev/guro18/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => onAddContact(data));

    setFormData({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                />
            </label>

            <label>
                Last Name:
                <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                />
            </label>

            <label>
                Street:
                <input
                type='text'
                name='street'
                value={formData.street}
                onChange={handleChange}
                />
            </label>

            <label>
                City:
                <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default AddContactForm;