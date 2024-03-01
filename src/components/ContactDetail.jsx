import React from 'react';
import { createRoutesFromChildren, useParams } from 'react-router-dom';

const ContactDetail = ({contacts}) => {
    const {id} = useParams()    
    const contact = contacts[id-1]
    return (
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}</p>
        </div>
    );
}

export default ContactDetail;
