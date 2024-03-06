import React from 'react';
import { Routes, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UpdateContact from './UpdateContact.jsx';
import { Route } from 'react-router-dom';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


export default function ContactDetail({ contacts, ApiURL }) {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));


    if (!contact) {
        return <div>Contact not found</div>;
    }
    return (
        <>
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <h3>{contact.street}, {contact.city}</h3>
            <Link to={`/contact/${contact.id}/update`}>Update</Link>
            <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
        </div>
        </>
    );
}