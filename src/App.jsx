import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Form from './form/index';
import Contacts from './contactmenu/index';
import { createContext, useState, useEffect } from 'react'
import Individual from './contact';

const ContactContext=createContext()
export default function App() {

    const [contacts, setContacts]=useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/thomamn/contact')
        .then(res => res.json())
        .then(data => setContacts(data))
      }, []
      )

    console.log(contacts)

    return (
        <>
            <ContactContext.Provider value = {{contacts, setContacts}}>

                <header>
                    <h1>Menu</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/contacts">Contact List</Link>
                            </li>
                            <li>
                                <Link to="/form">Add New Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route 
                        path="/contacts" 
                        element={<Contacts/>} 
                    />
                    <Route
                        path="/form"
                        element={<Form/>}
                    />
                    <Route
                        path="/contact/:id"
                        element={<Individual/>}
                    />
                </Routes>

            </ContactContext.Provider>
          
        </>
      )
}

export {ContactContext};
