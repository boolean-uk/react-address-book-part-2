import '../CSS/CreateContact.css'
import { usePeople } from '../../../context/PeopleProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateContact() {

    const { people, setPeople } = usePeople();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: null,
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const submission = { ...formData, id: people.length + 1 }
        setPeople((prevSaved) => [...prevSaved, submission])
        navigate(`/contacts`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create Contact</h2>

                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                />

                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    name="street"
                    type="text"
                    onChange={handleChange}
                />

                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={handleChange}
                />

                <button className='createbutton' type="submit">Save Contact</button>
            </form>
        </>
    );
}

export default CreateContact
