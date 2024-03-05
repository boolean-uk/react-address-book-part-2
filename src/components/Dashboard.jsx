import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardMenu from './DashboardMenu';
import ContactList from './ContactList';
import NewContactForm from './NewContactForm';
import Contact from './Contact';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';

function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    update();
  }, []);

  async function update() {
    await fetch("https://boolean-api-server.fly.dev/henrikrosenkilde/contact")
      .then(res => res.json())
      .then(setContacts);
  }

  return (
    <>
      <main className="container">
        <header className='left-menu'>
          <DashboardMenu />
        </header>
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route path="/view/:id" element={<Contact contacts={contacts} />} />
          <Route path="/new" element={<NewContactForm update={update} />} />
          <Route path="/delete/:id" element={<DeleteContact contacts={contacts} update={update} />} />
          <Route path="/edit/:id" element={<EditContact contacts={contacts} update={update} />} />
        </Routes>
      </main>
    </>
  );
}

export default Dashboard;