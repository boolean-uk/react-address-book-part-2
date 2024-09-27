import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/contacts';
import CreateContact from './components/CreateContact';
import ContactDetails from './components/contacts/componets/ContactDetails';
import UpdateContact from './components/UpdateContact';

function App() {

    const [contactData, setContactData] = useState([])
    const [shouldGetData, setShouldGetData] = useState(true)

    const URL = 'https://boolean-api-server.fly.dev/satokii/contact'

    function getContactData() {    
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setContactData(data)
            setShouldGetData(false)
        })
    }

    useEffect(() => {
        shouldGetData && getContactData() 
    }, [shouldGetData])

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
                    </header>
                    <Routes>
                        <Route
                            path='/'
                            element={<Dashboard contactData={contactData} />}
                            >
                        </Route>
                        <Route 
                            path="/contact-list"
                            element={<ContactList contactData={contactData} />}>
                        </Route>
                        <Route
                            path="/create-contact"
                            element={<CreateContact contactData={contactData} URL={URL} getContactData={getContactData} setShouldGetData={setShouldGetData} />}
                            >
                        </Route>
                        <Route
                            path="/contact-list/contact-details/:id"
                            element={<ContactDetails contactData={contactData} URL={URL} setShouldGetData={setShouldGetData} /> }
                        >
                        </Route>
                        <Route
                        path='/update-contact/:id'
                        element={<UpdateContact URL={URL} setShouldGetData={setShouldGetData} contactData={contactData} />}
                        >
                        </Route>
                    </Routes>
                </div>

            </>
        );
    }

export default App;
