import './App.css';
import { useState, useEffect, createContext } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import ContactsList from './ContactsList';
import ContactView from './ContactView';
import Menu from './Menu';
import ContactForm from './ContactForm';
export const ContactsContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    const url ="https://boolean-uk-api-server.fly.dev/bjorgastrid/contact";

    const fetchAndSetContacts = async () => {
        const contactResponse = await fetch(url);
        const jsonContacts = await contactResponse.json();
        setContacts(jsonContacts);
    }

    useEffect(() => {
        fetchAndSetContacts();
    }, [])

    return (
        <ContactsContext.Provider
            value = {{contacts: contacts, setContacts: setContacts, fetchAndSetContacts: fetchAndSetContacts, url: url }} >
            <div>
                <ul>
                    <Link to="/">Menu</Link>
                </ul>     
            </div>
            <Routes>
                <Route path="/" element= {<Menu/>}/>
                <Route path = "/contacts" element = {<ContactsList/>}/>
                <Route path = "/contacts/:id" element = {<ContactView/>}/>
                <Route path = "/contacts/add" element = {<ContactForm/>} />
            </Routes>
        </ContactsContext.Provider>
            
        
    );
}

export default App;
