import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {ContactContext} from '../App'

function UpdateContact() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {contacts} = useContext(ContactContext);
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email:'',
        phone: '',
        street: '',
        city: '',
        postcode: '',
        country: ''
    });
    
    useEffect(() => {
            if (contacts && id) {
                const matchingContact = contacts.find((contact) => 
                    Number(contact.id) === Number(id)
                )
                setContact(matchingContact)
            }
        }, [contacts, id])

        const updateContact = async (id, contactData) => {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/anselin-thefirst/contact/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(contactData)
            });
            return response.json();
        }
    
        function handleChange(event) {
            const inputName = event.target.name;
            const inputVlaue = event.target.value;
    
            if (inputName === 'first') {
                setContact({...contact, firstName: inputVlaue});
            }
    
            if (inputName === 'last') {
                setContact({...contact, lastName: inputVlaue});
            }

            if (inputName === 'email') {
                setContact({...contact, email: inputVlaue});
            }

            if (inputName === 'phone') {
                setContact({...contact, phone: inputVlaue});
            }
    
            if (inputName === 'street') {
                setContact({...contact, street: inputVlaue});
            }
    
            if (inputName === 'city') {
                setContact({...contact, city: inputVlaue});
            }

            if (inputName === 'postcode') {
                setContact({...contact, postcode: inputVlaue});
            }

            if (inputName === 'country') {
                setContact({...contact, country: inputVlaue});
            }
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            updateContact(id, contact)
                .then (console.log(contact))
                .then(() => {
                    navigate(`/contact/${id}`);
                })
                .catch(error => console.error(error));
        };

        return (
            <div>
            <h1>Update a contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first">
                    First Name:
                    <input 
                    type="text"
                    name="first"
                    value={contact.firstName}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="last">
                    Last Name:
                    <input 
                    type="text"
                    name="last"
                    value={contact.lastName}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="email">
                    Email:
                    <input 
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="phone">
                    Phone Number:
                    <input 
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="street">
                    Street:
                    <input 
                    type="text"
                    name="street"
                    value={contact.street}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="city">
                    City:
                    <input 
                    type="text"
                    name="city"
                    value={contact.city}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="postcode">
                    Postcode:
                    <input 
                    type="text"
                    name="postcode"
                    value={contact.postcode}
                    onChange={handleChange}
                    required />
                </label>
                <label htmlFor="country">
                    Country:
                    <input 
                    type="text"
                    name="country"
                    value={contact.country}
                    onChange={handleChange}
                    required />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
        );
}

export default UpdateContact;