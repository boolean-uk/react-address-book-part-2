import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ContactList from './components/ContactList/ContactList';
import NewContactForm from './components/ContactForm/NewContactForm';
import { createContext, useEffect, useState } from 'react';
import EmptyDash from './components/Dashboard/EmptyDashboard';
import ContactProfile from './components/ContactList/Profile/ContactProfile';

export const ContactContext = createContext()

function App() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()
    

    const getContacts = async () => {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/panfi98/contact");
        const data = await response.json();
        setContacts(data);
    }

    useEffect(() => {
        getContacts()
    }, [])

    const handleSubmit = async () => {
        await fetch('https://boolean-uk-api-server.fly.dev/panfi98/contact', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(contact)
        });
        navigate('/contacts')
        setContact({
            firstName: '',
            lastName: '',
            street: '',
            city: ''
        })
        getContacts()
    }


    return (
        <div>
            <ContactContext.Provider value={{ contact, setContact, contacts, setContacts, getContacts, handleSubmit }}>
                <Dashboard />
                <Routes>
                    <Route path='/' element={<EmptyDash />} />
                    <Route path='/contacts' element={<ContactList />} />
                    <Route path='/create' element={<NewContactForm />} />
                    <Route path='/view/:id' element={<ContactProfile/> } />
                </Routes>
            </ContactContext.Provider>
        </div>
    );
}

export default App;
