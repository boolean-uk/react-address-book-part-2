import React, { createContext, useState, useEffect } from 'react';

const BASE_URL = 'https://boolean-uk-api-server.fly.dev/andreascnits';

export const DataContext = createContext();

function DataProvider({ children }) {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/contact`);
            if (!response.ok) throw new Error('Failed to fetch contacts');
            const data = await response.json();
            setContacts(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const createContact = async (contactData) => {
        try {
            const response = await fetch(`${BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });
            if (!response.ok) throw new Error('Failed to create contact');
            const newContact = await response.json();
            setContacts(prev => [...prev, newContact]);
            return newContact;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const updateContact = async (id, contactData) => {
        try {
            const response = await fetch(`${BASE_URL}/contact/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });
            if (!response.ok) throw new Error('Failed to update contact');
            const updatedContact = await response.json();
            setContacts(prev => prev.map(contact => 
                contact.id === id ? updatedContact : contact
            ));
            return updatedContact;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const deleteContact = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/contact/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to delete contact');
            setContacts(prev => prev.filter(contact => contact.id !== id));     
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const contextValue = {
        contacts,
        setContacts,
        loading,
        error,
        createContact,
        updateContact,
        deleteContact
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;