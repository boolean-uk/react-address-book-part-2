import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';

function App() {

    const url = "https://boolean-uk-api-server.fly.dev/mariehhansen";

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${url}/contact`);
            const jsonData = await response.json();
            setContacts(jsonData);
        };
        fetchData();
    }, [])

    const handleAddContact = (newContact) => {
        setContacts(prev => [...prev, newContact]);
    };

    return (
        <main className='dashboard-layout'>
        <Menu />
        <Routes>
            <Route
                path='/contacts'
                element={ <ContactList contacts={contacts}/> }
            />
            <Route 
                path='/add-contact' element={ <ContactForm onAddContact={handleAddContact} />} 
            />
        </Routes>
        </main>
        
    );
}

export default App;
