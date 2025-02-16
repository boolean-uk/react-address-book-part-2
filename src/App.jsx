import  { useState, createContext } from 'react';
import './App.css';
import ContactList from './components/Dashboard/ContactList';
import CreateContact from './components/Contact/CreateContact';
import ContactInfo from './components/Contact/ContactInfo';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export const ContactContext = createContext()


function App() {

    const [contacts, setContacts] = useState([])


    return (
        <Router> 
        <div className='app'>
            <header className='app-header'> 
                <h1> Contacts-App </h1>
            </header>
            <div>
                <Link to='/' className='nav-button'> Dashboard</Link>
                <Link to='/add-contact' className='nav-button'>Add New Contact</Link>
            </div>
        <main>
            <ContactContext.Provider value={{ contacts, setContacts}}>
        <Routes>
            <Route path= '/' element={<ContactList contacts={contacts} setContacts={setContacts}/>}/>
            <Route path= '/add-contact' element={<CreateContact setContacts={setContacts} />} />
            <Route path= '/contact/:id' element={<ContactInfo />} />
        </Routes>
        </ContactContext.Provider>
        </main>
        </div>
        </Router>
    );
}

export default App;
