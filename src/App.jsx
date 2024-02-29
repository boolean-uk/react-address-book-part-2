import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { Create } from './components/Create';

function App() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    }

    return (
      <div className='dashboard-layout'>
        <div>
          <div>
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/">Contact List</Link>
                </li>
                <li>
                    <Link to="/create">Add New Contact</Link>
                </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard contacts={contacts} />} />
          <Route path="/:id" element={<Profile contacts={contacts} />} />
          <Route path="/create" element={<Create addContact={addContact} />} />
        </Routes>
      </div>
    );
}

export default App;