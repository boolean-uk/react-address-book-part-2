import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { Create } from './components/Create';
import { getContacts, postContact } from './utils/requests';

let maxId = 1;

function App() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        maxId++;
        const newContact = { ...contact, id: maxId};
        // setContacts([...contacts, newContact]);
        postContact(newContact, setContacts)
    }

    useEffect(() => {
        getContacts()
            .then((data) => {
                setContacts(data);
                maxId = data.reduce((max, c) => (c.id > max ? c.id : max), 0);
            })
            .catch((error) => console.error('Error fetching contacts:', error));
    }, []);

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