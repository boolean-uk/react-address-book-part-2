import { useEffect, useState } from 'react';
import '../styles/UpdateContact.css';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateContact() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [hasErrored, setHasErrored] = useState(null);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`)
            .then(response => response.json())
            .then(data => {
                setContact(data);
                setForm({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    street: data.street,
                    city: data.city
                })
            })
            .catch(setHasErrored(true))
    }, [id])

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        if (form.firstName === '' || form.lastName === '' || form.street === '' || form.city === '') {
            return alert('Please fill out all fields.')
        }
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate(`/contact/${id}`))
    }

    return (
        <div className="updateContactContainer">
            <h1 className="title">Update Contact</h1>
            {
                contact ?
                    <form className='uForm' onSubmit={handleFormSubmit}>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" value={form.firstName} onChange={handleFormChange} />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" value={form.lastName} onChange={handleFormChange} />
                        <label htmlFor="street">Street:</label>
                        <input type="text" name="street" id="street" value={form.street} onChange={handleFormChange} />
                        <label htmlFor="city">City:</label>
                        <input type="text" name="city" id="city" value={form.city} onChange={handleFormChange} />
                        <button type="submit" className="updateButton">Update</button>
                    </form>
                    :
                    hasErrored ?
                        <h1>An error occured fetching data...</h1>
                        :
                        <h1>Loading...</h1>
            }
        </div>
    )
}