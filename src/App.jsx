import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Index';
import { Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/contacts/Index';
import CreateContact from './components/CreateContact/Index';
import ContactDetails from './components/contacts/componets/ContactDetails';

function App() {

   const [contactData, setContactData] = useState([])

   const URL = 'https://boolean-api-server.fly.dev/Faiza/contact'

   useEffect(() => {
    getData()
   }, [])

   const getData = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        setContactData(data)
        console.log(data)
    })
   }
    //here
    //useEffect(getContactData, [])

    return (

        <>
        <h1> hello faiza </h1>
           
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
                        element={<CreateContact contactData={contactData} setContactData={setContactData} URL={URL} getData={getData} />}    
                    >
                    </Route>
                    <Route
                        path="/contact-list/contact-details/:id"
                        element={<ContactDetails contactData={contactData} />}
                    >
                    </Route>
                </Routes>
     </div>

        </>
    );
}

export default App;
