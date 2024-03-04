import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import ContactProfile from './Pages/ContactProfile/ContactProfile';
import CreateContactForm from './Pages/CreateContact/CreateContactForm';
import { fetchContacts, createContact } from './Toolbox/api'
import EditProfileForm from './Pages/EditProfile/EditProfileForm';

function App() {
  const [contacts, setContacts] = useState([]);

  const updateContacts = async () =>{
    fetchContacts().then(setContacts);
  }

  //Call on render
  useEffect(() => {
    updateContacts()
  }, []);

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
        <Route path="/view/:id" element={<ContactProfile contacts={contacts} updateContacts={updateContacts}/>} />
        <Route path="/create" element={<CreateContactForm updateContacts={updateContacts}/>} />
        <Route path="/update/:id" element={<EditProfileForm updateContacts={updateContacts}/>} />
      </Routes>
    </>
    );
}

export default App;
