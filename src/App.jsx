import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import CreateContact from './components/CreateContact';
import ContactProfile from './components/Dashboard/ContactProfile';
import { useState } from 'react';

function App() {
    const [contacts, setContacts] = useState();
    
    return (
        <Routes>
            <Route path="/:username" element={<Dashboard contacts={contacts} setContacts={setContacts}/>}/>
            <Route path="/:username/createcontact" element={<CreateContact />}/>
            <Route path='/:username/contactProfile/:id' element={<ContactProfile contacts={contacts}/>} />
        </Routes>
    );
}

export default App;
