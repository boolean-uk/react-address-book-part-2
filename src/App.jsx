import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/Index';
import ViewContact from './components/ViewContact';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';

function App() {
    const [allContacts, setAllContacts] = useState([])
    const [contact, setContact] = useState({
        firstName: '', 
        lastName: '',
        street: '',
        city: ''
    })

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/tzoltie/contact')
        .then(response => response.json())
        .then(json => setAllContacts(json))
    }, [])

    
    return (
        <>
            <header className='header'>
                <Dashboard />
            </header>

             <Routes>
                <Route 
                path='/contact-list' 
                element={<ContactList allContacts={allContacts}/>}/>
                <Route
                path='/view'
                element={<ViewContact/>} />
                <Route 
                path='/add'
                element={<AddContact contact={contact} setContact={setContact} allContacts={allContacts} setAllContacts={setAllContacts}/>}/>
             </Routes>
        </>
        
    );
}

export default App;
