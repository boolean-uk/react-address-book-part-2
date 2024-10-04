// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const username = 'username';
const baseURL = `https://boolean-uk-api-server.fly.dev/${username}/contact`;

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(filter.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Contacts</h1>
      <Link to="/create">Create a contact</Link>
      <input
        type="text"
        placeholder="Filter contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactDetail = () => {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseURL}/${contactId}`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) => console.error(error));
  }, [contactId]);

  const handleDelete = () => {
    fetch(`${baseURL}/${contactId}`, {
      method: 'DELETE',
    })
      .then(() => navigate('/'))
      .catch((error) => console.error(error));
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <div style={{ height: '300px', width: '300px' }}>
        <MapContainer center={[contact.latitude, contact.longitude]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[contact.latitude, contact.longitude]} />
        </MapContainer>
      </div>
      <button onClick={handleDelete}>Delete Contact</button>
      <Link to={`/edit/${contact.id}`}>Edit Contact</Link>
      <Link to="/">Back to contact list</Link>
    </div>
  );
};

const EditContact = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ firstName: '', lastName: '', street: '', city: '', email: '', phone: '', latitude: 0, longitude: 0 });

  useEffect(() => {
    fetch(`${baseURL}/${contactId}`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) => console.error(error));
  }, [contactId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then(() => navigate(`/contact/${contactId}`))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} required />
        </div>
        <div>
          <label>Street:</label>
          <input type="text" value={contact.street} onChange={(e) => setContact({ ...contact, street: e.target.value })} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={contact.city} onChange={(e) => setContact({ ...contact, city: e.target.value })} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} required />
        </div>
        <div>
          <label>Latitude:</label>
          <input type="number" value={contact.latitude} onChange={(e) => setContact({ ...contact, latitude: parseFloat(e.target.value) })} required />
        </div>
        <div>
          <label>Longitude:</label>
          <input type="number" value={contact.longitude} onChange={(e) => setContact({ ...contact, longitude: parseFloat(e.target.value) })} required />
        </div>
        <button type="submit">Update Contact</button>
      </form>
      <Link to={`/contact/${contactId}`}>Back to Contact</Link>
    </div>
  );
};

const CreateContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({ firstName: '', lastName: '', street: '', city: '', email: '', phone: '', latitude: 0, longitude: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then(() => navigate('/'))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Create a new contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} required />
        </div>
        <div>
          <label>Street:</label>
          <input type="text" value={contact.street} onChange={(e) => setContact({ ...contact, street: e.target.value })} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={contact.city} onChange={(e) => setContact({ ...contact, city: e.target.value })} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} required />
        </div>
        <div>
          <label>Latitude:</label>
          <input type="number" value={contact.latitude} onChange={(e) => setContact({ ...contact, latitude: parseFloat(e.target.value) })} required />
        </div>
        <div>
          <label>Longitude:</label>
          <input type="number" value={contact.longitude} onChange={(e) => setContact({ ...contact, longitude: parseFloat(e.target.value) })} required />
        </div>
        <button type="submit">Create Contact</button>
      </form>
      <Link to="/">Back to contact list</Link>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/contact/:contactId" element={<ContactDetail />} />
      <Route path="/edit/:contactId" element={<EditContact />} />
      <Route path="/create" element={<CreateContact />} />
    </Routes>
  </Router>
);

export default App;
