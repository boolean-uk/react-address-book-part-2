import './App.css';
import { useState, useEffect } from 'react';
import LeftMenu from './components/LeftMenu';
import ContactList from './components/ContactList';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import ContactListItem from './components/ContactListItem';
import ViewContactProfile from './components/ViewContactProfile'
import ContactForm from './components/ContactForm';
import EditContact from './components/EditContact';

function App() {
    const [contacts, setContacts] = useState([])
    const [updateContact, setUpdateContact] = useState({updating: false, index: -1})
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/SebastianEngan/contact`)
        .then(res => res.json())
        .then(contactsData => setContacts(contactsData))
    }, [])

    

    return (
        <>
            <body>
                <div className='left-menu'>
                    <h1>
                        Menu
                    </h1>
                    <nav>
                        <li>
                            <Link to="">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                                Contacts List
                            </Link>
                        </li>
                        <li>
                            <Link to= "/contact-form">
                                Add new contact
                            </Link>
                        </li>
                    </nav>
                </div>
                <main className="contact-list">
                    
                </main>
            </body>
            <Routes>
                <Route path="/contacts" element={
                    <ContactList 
                        contacts={contacts} 
                        updateContact={updateContact}
                        setUpdateContact={setUpdateContact}
                    />}
                />
                <Route path="/contacts/:id" element={
                    <ViewContactProfile 
                    contacts={contacts} 
                    setContacts={setContacts}
                    />}
                />
                <Route path="/contact-form" element={
                    <ContactForm 
                        contacts={contacts} 
                        setContacts={setContacts}
                        updateContact={updateContact}
                        setUpdateContact={setUpdateContact}
                    />}
                />
                <Route path='/contacts/edit-contact-form' element={
                    <EditContact 
                        contacts={contacts} 
                        setContacts={setContacts}
                        updateContact={updateContact}
                        setUpdateContact={setUpdateContact}
                    />}
                />
            </Routes>
            
        </>
    );
}

export default App;
