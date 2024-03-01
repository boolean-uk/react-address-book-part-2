import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import ContactProfile from './Pages/ContactProfile/ContactProfile';
import CreateContactForm from './Pages/CreateContact/CreateContactForm';
import { fetchContacts, createContact } from './Toolbox/api'

function App() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts().then(setContacts);
  }, []);

  const sendCreateRequest = async (data) => {
    try {
      await createContact(data);
      setContacts(await fetchContacts());
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error state if needed
    }
  };

    return (
    <>
      <header>
        <h1>Your contacts</h1>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/create">Create Contact</Link></li>
          </ul>
        </nav>
      </header> 
      <Routes>
        <Route
            path="/"
            element={<Dashboard contacts={contacts}/>}
          />
          <Route path="/view/:id" element={<ContactProfile contacts={contacts}/>} />
          <Route path="/create" element={<CreateContactForm sendCreateRequest={sendCreateRequest}/>} />
      </Routes>
    </>
    );
}

export default App;
