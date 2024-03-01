import React, { useState } from 'react';
import { postRequest } from '../utils/requests';
import { Contact } from '../types';
import { useNavigate } from 'react-router-dom';

type ContactsFormProps = {
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>
};

const ContactForm = ({ setContacts }: ContactsFormProps ) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
    });
    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let req = postRequest('https://boolean-api-server.fly.dev/solido7/contact', formData)
        .then((data: Contact) => {
            setContacts(prev => [...prev, data]);
            navigate('/');
        });
    };
    
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Create Contact</h2>
            <form style={{ width: '400px'}} onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{marginTop: '10px', marginBottom: '10px'}}>First Name</h3>
                    <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                    <h3 style={{marginTop: '10px', marginBottom: '10px'}}>Last Name</h3>
                    <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                    <h3 style={{marginTop: '10px', marginBottom: '10px'}}>Street</h3>
                    <input
                        type="text"
                        placeholder="Street"
                        value={formData.street}
                        onChange={(e) => setFormData({...formData, street: e.target.value})}
                    />
                    <h3 style={{marginTop: '10px', marginBottom: '10px'}}>City</h3>
                    <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'right', marginTop: '10px'}}>
                    <button style={{ marginRight: 0, marginLeft: 'auto' }} type="submit">Create</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

