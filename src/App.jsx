import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/Index';
import ViewContact from './components/ViewContact';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
    const [allContacts, setAllContacts] = useState([])
   

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/tzoltie/contact')
        .then(response => response.json())
        .then(json => setAllContacts(json))
    }, [setAllContacts])



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
                path='/view/:id'
                element={<ViewContact allContacts={allContacts} setAllContacts={setAllContacts}/>} />
                <Route 
                path='/add'
                element={<AddContact allContacts={allContacts} setAllContacts={setAllContacts}/>}/>
                <Route 
                path='/update/:id'
                element={<UpdateUser allContacts={allContacts} setAllContacts={setAllContacts}/>}/>
             </Routes>
        </>
        
    );
}

export default App;
