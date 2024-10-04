import '../CSS/CreateContact.css'
import { usePeople } from '../../../context/PeopleProvider';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditPerson = () => {

    const { setPeople } = usePeople();
    const navigate = useNavigate();

    const location = useLocation();
    const { person } = location.state;


    const [formData, setFormData] = useState({
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
        street: person.street,
        city: person.city
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setPeople((prevSaved) =>
            prevSaved.map((person) =>
                person.id === formData.id ? formData : person
            )
        );
        navigate(`/view/${person.id}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Edit Contact</h2>

                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    name="street"
                    type="text"
                    value={formData.street}
                    onChange={handleChange}
                />

                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                />

                <button className='createbutton' type="submit">Save Changes</button>
            </form>
        </>
    );
}

export default EditPerson
