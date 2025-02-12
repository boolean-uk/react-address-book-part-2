import './App.css';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import CreateContact from './components/CreateContact';
import { Link, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import UpdateContact from './components/UpdateContact';

const ContactContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/anselin-thefirst/contact')
        .then (res => res.json())
        .then (data => setContacts(data) )
      }, []);

    return (
        <div className='app'>
            <ContactContext.Provider value={{contacts: contacts, setContacts: setContacts}}>
            <header className='menu'>
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <Link to="/">Contact list</Link>
                        <Link to="/create">Create new contact</Link> 
                    </ul>
                </nav>
            </header>
            <main className='content'>
            <Routes>
                <Route path='/' element={<ContactList />} />
                <Route path='/contact/:id' element={<ContactDetails />} />
                <Route path='/create' element={<CreateContact />} />
                <Route path='/edit/:id' element={<UpdateContact />} />
            </Routes>
            </main>
            </ContactContext.Provider>
        </div>
    );
}

export {App, ContactContext};
