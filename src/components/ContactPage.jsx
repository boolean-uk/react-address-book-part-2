import React from 'react';
import { Routes, Route,useContext } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import { AddressBookContext } from '../App';

function ContactPage() {
  const {contacts} = useContext(AddressBookContext);
  return (
    <main className="dashboard">
      <h2>Contacts</h2>
      <Routes>
        <Route path="/" element={<ContactList/>} />
        <Route path="/view/:id" element={<ContactDetail />} />
      </Routes>
    </main>
  );
}

export default ContactPage;