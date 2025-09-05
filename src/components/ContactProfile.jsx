import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"

import { ContactContext } from "../App"

function ContactProfile (){

    const { contacts, contact_api } = useContext(ContactContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const [contact, setContact] = useState(null);

    const editContact = async () => {
        navigate(`/profile/${contact.id}/edit`)
    };

    const deleteContact = async () => {

        try {
            const response = await fetch(`${contact_api}/${contact.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                navigate("/");
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const clickedContact = contacts.find(c => String(c.id) === String(id));
        
        if (clickedContact) {
            setContact(clickedContact);
        }

    },[id, contact, contacts]);

    return (
        <>
            <h1>Contact Profile</h1>
            <nav>
                <Link to="/">Dashboard</Link>
            </nav>
            {contact ? (
                <>
                    <h2 className="not-bold"><strong>Name:</strong> {contact.firstName} {contact.lastName}</h2>
                    <img src={contact.profileImage}/>
                    <p><strong>Gender:</strong> {contact.gender}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Job title:</strong> {contact.jobTitle}</p>
                    <p><strong>Street:</strong> {contact.street}</p>
                    <p><strong>City:</strong> {contact.city}</p>
                    <p><strong>Latitude:</strong> {contact.latitude}</p>
                    <p><strong>Longitude:</strong> {contact.longitude}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                    <strong>Favorite colour:</strong>
                    <div
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: contact.favouriteColour,
                            border: '1px solid #000',
                            borderRadius: '4px'
                        }}
                    />
                    </div>
                    <br></br>
                    <button onClick={editContact}>Edit contact</button>
                    <button onClick={deleteContact}>Delete contact</button>
                </>
            ) : (
                <p>Not available</p>
            )}

        </>
    )
}

export default ContactProfile
