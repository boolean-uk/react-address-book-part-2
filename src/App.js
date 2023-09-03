
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import ContactDisplay from './components/ContactDetails';
import Dashboard from './components/Dashboard';

function App() {
  const [contacts, setContacts] = useState([]);

  async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Dashboard />} /> 
        <Route path='/' element={<ContactList contacts={contacts} />} />
        <Route path='/contact-list' element={<ContactList contacts={contacts} />} />
        <Route path="/new-contact" element={<CreateContact setContacts={setContacts} contacts={contacts} />} />
        <Route path="/contact-list/:id" element={<ContactDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
