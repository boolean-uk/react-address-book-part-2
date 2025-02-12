import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {ContactContext} from '../App';

function ContactDetails() {
    const {id} = useParams();
    const {contacts} = useContext(ContactContext);
    const [contact, setContact] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find((contact) => 
                Number(contact.id) === Number(id) // with curly brackets above and below, need to return this line
            )
            setContact(matchingContact)
        }
    }, [contacts, id])

    const deleteContact = async (id) => {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/anselin-thefirst/contact/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    }

    const handleDelete = () => {
        deleteContact(id)
            .then(() => {
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    if (!contact) return <div>Loading...</div>

    return (
        <div>
            <h1>Contact Details</h1>
            <p>First Name: {contact.firstName}</p>
            <p>Last Name: {contact.lastName}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Street: {contact.street}</p>
            <p>City: {contact.city}</p>
            <p>Postcode: {contact.postcode}</p>
            <p>Country: {contact.country}</p>
            <button onClick={() => navigate(`/edit/${id}`)}>Update Contact</button>
            <button onClick={handleDelete} style={{marginLeft: '10px'}}>Delete Contact</button>
        </div>
    );
}

export default ContactDetails;