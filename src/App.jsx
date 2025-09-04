import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import ContactList from './components/ContactList.jsx';
import AddContact from './components/AddContact.jsx';
import ContactView from './components/ContactView.jsx';

function App() {
    const url = 'https://boolean-uk-api-server.fly.dev/monaeikli';
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function EditContactWrapper({ contacts, onUpdate }) {
        const { id } = useParams();
        const contact = contacts.find(c => String(c.id) === id);
        if (!contact) return <p>Contact not found.</p>;
        return (
            <AddContact
                initialValues={contact}
                onAdd={(data) => onUpdate(contact.id, data)}
                buttonText="Update Contact"
            />
        );
}
    useEffect(() => {
        fetch(`${url}/contact`)
            .then((response) => response.json())
            .then((data) => {
                setContacts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching contacts:', error);
                setError('Failed to fetch contacts');
                setLoading(false);
            });
    }, []);


    const navigate = useNavigate();

    function handleAddContact(newContact) {
        setContacts((prev) => [...prev, { ...newContact, id: Date.now() }]);
        navigate('/contacts');
    }

    function handleUpdateContact(id, updatedData) {
        fetch(`${url}/contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to update');
                setContacts(prev => prev.map(contact => (contact.id === id ? { ...contact, ...updatedData } : contact)));
                navigate(`/contacts/${id}`);
            })
            .catch(error => {
                console.error('Error updating contact:', error);
            });
    }

    function handleDeleteContact(id) {
        fetch(`${url}/contact/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to delete');
                setContacts(prev => prev.filter(contact => contact.id !== id));
                navigate('/contacts');
            })
            .catch(error => {
                console.error('Error deleting contact:', error);
            });
    }

    return (
        <div className="app-layout">
            <nav className="app-nav">
                <ul className="app-nav-list">
                    <li>
                        <Link className="app-nav-link" to="/contacts">Contact List</Link>
                    </li>
                    <li>
                        <Link className="app-nav-link" to="/add">Add Contact</Link>
                    </li>
                </ul>
            </nav>
            <main className="app-main">
                <Routes>
                    <Route path="/contacts" element={
                        <>
                            <h1>Contact List</h1>
                            {loading && <p>Loading...</p>}
                            {error && <p>{error}</p>}
                            <ContactList contacts={contacts} />
                        </>
                    } />
                    <Route path="/add" element={<AddContact onAdd={handleAddContact} />}  />
                    <Route path="/contacts/:id" element={<ContactView contacts={contacts} onUpdate={handleUpdateContact} onDelete={handleDeleteContact} />}  />
                    <Route path="/contacts/:id/edit" element={<EditContactWrapper contacts={contacts} onUpdate={handleUpdateContact} />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
