import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import ContactsList from './components/ContactsList';
import CreateContact from './components/CreateContact';
import ContactDetails from './components/ContactDetails';
import UpdateContact from './components/UpdateContact';

export default function App() {
    const [contacts, setContacts] = useState([])

    return (
        <>
            <Nav />

            <Routes>
                <Route 
                    path='/'
                    element={<ContactsList 
                        contacts={contacts}
                        setContacts={setContacts}
                    />}
                />

                <Route 
                    path='/contact/new'
                    element={<CreateContact />}
                />

                <Route 
                    path='/contact/:id'
                    element={<ContactDetails contacts={contacts} />}
                />

                <Route 
                    path='/contact/update/:id'
                    element={<UpdateContact 
                        contacts={contacts}
                        setContacts={setContacts} 
                    />}
                />
            </Routes>
        </>
    )
}
