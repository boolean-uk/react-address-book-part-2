import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile'; 
import AddContact from './pages/PersonProfile/components/AddContact';
// import './App.css';

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/noahlenn/contact')
          .then(respone => respone.json())
          .then(data => setContacts(data))
          .catch(error => console.error("Error fetching contacts fro API: ", error))
      }, [])


    return (
        <>
            <header>
                <h1>Add Your Contacts</h1>
                <nav>
                    <h2>Menu</h2>
                    <ul>
                        {/* <li>
                            <Link to="/">Dashboard</Link>
                        </li> */}
                        <li>
                            <Link to="/contacts">Contacts List</Link>
                        </li>
                        <li>
                            <Link to="/createcontact">Add New Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        <Routes>
            <Route
                path="/" 
                element={<Dashboard contacts={contacts}/>}
            />
            <Route
                path="/createcontact"
                element={<AddContact contacts={contacts}/>}
            />
            <Route
                path="/contacts"
                element={<Dashboard contacts={contacts}/>}
            />
            {/* <Route
                path="/contacts/:id"
                element={<PersonProfile contacts={contacts}/>}
            /> */}
  
        </Routes>
      </>
        // <div className="contacts-list">
        //     <h1>Contact List</h1>
        //     {contacts.map(contact => (
        //         <div key={contact.id} className="contact">
        //             <h2>{contact.firstName} {contact.lastName}</h2>
        //             <p>Street: {contact.street}</p>
        //             <p>City: {contact.city}</p>
                  
        //         </div>
        //     ))}
        // </div>

    );
}

export default App;
