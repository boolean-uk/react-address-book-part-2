import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Contact } from '../types';
import { deleteRequest } from '../utils/requests';
import { useNavigate } from 'react-router-dom';

type ContactInfoProps = {
    contacts: Array<Contact>;
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

const ContactInfo = ({ contacts, setContacts }: ContactInfoProps) => {
    const [contact, setContact] = useState<Contact | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const foundContact = contacts.find((contact) => contact.id == id);
        setContact(foundContact || null);
    }, [id, contacts]);

    const handleDelete = () => {
        let req = deleteRequest(`https://boolean-api-server.fly.dev/solido7/contact/${id}`)
        .then(() => {
            setContacts(prev => prev.filter(contact => contact.id != id));
            navigate('/');
        });
    };

    return (
        <div>
            <h2>{contact?.firstName + ' ' + contact?.lastName}</h2>
            <p>{contact?.street + ' ' + contact?.city}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ContactInfo;