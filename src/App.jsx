import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/create" element={<ContactForm setContacts={setContacts} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
