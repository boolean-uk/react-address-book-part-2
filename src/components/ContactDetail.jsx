import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ContactDetail = ({ contacts, url, getData }) => {
    const navigate = useNavigate()

    const { id } = useParams()
    const contact = contacts.find(contact => contact.id == id)

    const handleDelete = () => {
        fetch(`${url}/${id}`
            , {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        getData()
        navigate('/contacts')
    }

    const handleEdit = () => {
        navigate(`/update/${id}`, {
            state: { contact: contact, url: `${url}/${id}` }
        })
    }

    return (
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}</p>
            <button onClick={handleDelete}>Delete contact</button>
            <button onClick={() => handleEdit()}>Edit contact</button>
        </div>
    );
}

export default ContactDetail;
