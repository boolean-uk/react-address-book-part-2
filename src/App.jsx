import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/contacts';
import CreateContact from './components/AddContact';
import ContactDetails from './components/contacts/componets/ContactDetails';

function App() {

    const [contactData, setContactData] = useState([])

    const URL = 'https://boolean-api-server.fly.dev/satokii/contact'

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setContactData(data))
    }, [])
    
    console.log(contactData)

        return (
            <>
                <div className='container'>
                    <header className='header'>
                        <section>
                            <h2>Menu</h2>
                            <Link to="/contact-list">Contact List</Link>
                            <br />
                            <Link to="/create-contact">Add new contact</Link>
                        </section>
                        {/* <Dashboard contactData={contactData}></Dashboard> */}
                    </header>
                    <Routes>
                        <Route
                            path='/'
                            element={<Dashboard contactData={contactData} />}
                            >
                        </Route>
                        <Route 
                            path="/contact-list"
                            element={<Contact contactData={contactData} />}>
                        </Route>
                        <Route
                            path="/create-contact"
                            element={<CreateContact />}
                            >
                        </Route>
                        <Route
                            path="/contact-list/contact-details/:id"
                            element={<ContactDetails contactData={contactData} /> }
                        >
                        </Route>
                    </Routes>
                </div>

            </>
        );
    }

export default App;
