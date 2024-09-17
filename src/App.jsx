import { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { Create } from './components/Create';
import { Edit } from './components/Edit';
import { deleteContact, getContacts, postContact, putContact } from './utils/requests';

let maxId = 1;

function App() {
  const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        maxId++;
        const newContact = { ...contact, id: maxId};
        postContact(newContact, setContacts)
        navigate('/');
    }

    const editContact = (contact) => {
        putContact(contact, setContacts);
        navigate(`/${contact.id}`);
    }

    const removeContact = (id) => {
      deleteContact(id, setContacts);
      navigate('/');
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
      <div className="dashboard-layout">
        <div className="menu">
          <h2 className="menu-header ">Menu</h2>
          <Link to="/" className="create-link profile-link">Home</Link>
          <Link to="/create" className="create-link profile-link">Create contact</Link>
        </div>
        
        <div className="routes">
          <Routes>
            <Route
              path="/:id"
              element={
                <Profile
                  contacts={contacts}
                  editContact={editContact}
                  removeContact={removeContact}
                />
              }
            />
            <Route
              path="/create"
              element={<Create addContact={addContact} />}
            />
            <Route
              path="/:id/edit"
              element={<Edit editContact={editContact} contacts={contacts} />}
            />
          </Routes>
        </div>

        <div className="contact-list"><Dashboard contacts={contacts} /></div>
      </div>
    );
}

export default App;
