/* eslint-disable no-unused-vars */
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { ContactContext } from '../App';

export default function ContactDetails() {
    const {contacts, setContacts} = useContext(ContactContext);
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (contacts && id) {
            const match = contacts.find((c) => c.id === Number(id));
            setContact(match);
        }
    }, [contacts, id])


    if (!contact) return <p>Loading...</p>;

    const handleDelete = () => {
        // delete from database  
        fetch(`https://boolean-uk-api-server.fly.dev/siljegja/contact/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })

        navigate('/contacts');
    }
      
    return (
        <div className='contact-container'>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>{contact.street}, {contact.city}</p>
            <Link to={`/edit/${id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete()}>Delete contact</button>
        </div>
    )
}