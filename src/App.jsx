import { useEffect, useState } from 'react';
import './App.css';
import ContactsSection from './components/ContactsSection';
import { createContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import ContactListItem from './components/ContactsSection/contactListItem';
import CreateContact from './components/ContactsSection/Requests/createContact';
import RemoveContact from './components/ContactsSection/Requests/removeContact';
import UpdateContact from './components/ContactsSection/Requests/updateContact';

const ContactContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(()=> {
        axios.get('https://boolean-uk-api-server.fly.dev/LudwigJL/contact')
        .then(res => setContacts(res.data));
    }, [])

    console.log('appjsx')
    console.log(contacts)

    return (
        <main className='dashboard'>
            <div className='sidebar'>
                <h1>
                    Menu
                </h1>
                <nav>
                    <Link to={'/contacts'} className='menu-link'> Contacts List</Link>
                    <Link to={'/create'} className='menu-link'>Create Contact</Link>
                </nav>
            </div>

            <div className='dynamic'>
            <ContactContext.Provider value={ {contacts, setContacts} }>
                <Routes>
                    <Route path='/contacts' element={<ContactsSection />}></Route> 
                    <Route path='/contacts/view/:id' element={<ContactListItem />}></Route>   
                    <Route path='/create' element={<CreateContact />}></Route>     
                    <Route path='/contacts/remove/:id' element={<RemoveContact />}></Route>    
                    <Route path='/contacts/update/:id' element={<UpdateContact />}></Route> 
                </Routes>
        </ContactContext.Provider>
            </div>
        </main>
    
      )
}

export {App, ContactContext};

