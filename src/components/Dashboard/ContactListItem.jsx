import React from 'react';
import { Link } from 'react-router-dom';

function ContactListItem({ contact, url, setData }) {
 
   
    
    return (
        <li className="contact-item">
            <div className="contact-card">
                <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
                <Link to={`/contact/${contact.id}`} className="view-link">
                    <p>View Details</p>
                </Link>
                
            </div>
            <hr />
        </li>
    );
}

export default ContactListItem;
