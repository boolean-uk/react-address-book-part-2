import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { createContext, useEffect, useState } from 'react';
import ContactView from './components/ContactView';

export const ContactContext = createContext()

function App() {

    const [contacts, setContacts] = useState([]);

    const  FetchContacts = async () => {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/espensl2000/contact')
        const data = await response.json()
        setContacts(data)
    }

    useEffect(() => {
        FetchContacts()
    }, [])


    return (
        <>
        <div className="container">
        <nav className="nav-menu">
            <h1>Menu</h1>
            <Link to="/">Contacts list</Link>
            <Link to="/add">Add new contact</Link>

        </nav>

        <ContactContext.Provider
            value={{contacts: contacts, setContacts: setContacts}}
        >
            <section className="content">
                <Routes>
                    <Route path="/" element={<ContactList/>} />                
                    <Route path="/add" element={<ContactForm/>} />     
                    <Route path="/view/:id" element={<ContactView/>} />           
                </Routes>

            </section>
        </ContactContext.Provider>
        </div>

            
        </>
    );
}

export default App;
