import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CreateContact from './pages/CreateContact';
import ContactList from './pages/ContactList';
import ContactDetails from './pages/ViewContact';
import ViewContact from './pages/ViewContact';

export default function App() {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() =>{
        // Fetch contacts data from API
        fetch('https://boolean-api-server.fly.dev/santhia97/contact')
        .then(response => response.json())
        .then(data => setContacts(data))
        .catch(error => console.error('Error fetching data:', error));
    
      }, []);
  
    return (
      <div className='App'>
        <header>
          <h1>Create Contact</h1>
          <nav>
            <ul>
              <li>
                <Link to="/create-contact">Create Contact</Link>
              </li>
              <li>
                <Link to="/contact-list">Contact List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="/create-contact" element={<CreateContact setContacts={setContacts}/>} 
        />
        <Route path="/contact-list" element={<ContactList contacts={contacts} />}
         />
        <Route path="/view-contact/:id" element={<ViewContact />} 
        />
        </Routes>
      </div>
    )
  }
  