import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ContactDetail = ({contacts, url}) => {
    const navigate = useNavigate()

    const {id} = useParams()   
    console.log("🚀 ~ ContactDetail ~ id:", id)
     
    const contact = contacts.find(contact => contact.id == id)

    const handleDelete = (event) => {
        fetch(`${url}/${id}`
        , {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(navigate('/contacts'))
      }
    return (
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}</p>
            <button onClick={handleDelete}>Delete contact</button>
        </div>
    );
}

export default ContactDetail;
