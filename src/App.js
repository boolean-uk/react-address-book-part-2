import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import DashBoard from "./components/Dashboard";
import ContactDetails from "./components/ContactDetails";
import AddContact from "./components/AddContact"
import EditContact from "./components/EditContact"


function App() {
    const navigate = useNavigate()
    const [people, setPeople] = useState([]);
    const [localContact, setLocalContact] = useState([])

    async function getPeople() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await response.json();
      setPeople(json);
    }
  
    useEffect(() => {
      getPeople();
    }, []);
    
    const addContact = (newContact) => {
        setPeople(prevPeople => [...prevPeople, newContact])
        setLocalContact(prevPeople => [...prevPeople, newContact])
    }

    const deleteContact = (id) => {
        setPeople(prevPeople => prevPeople.filter(contact => contact.id !== id))
        navigate('/')
    }

  return (
    <>
      <div className="container">
        <div className="menu">
          <h1>Menu</h1>
          <ul>
            <li>
              <Link to="/">Contact List</Link>
            </li>
            <li>
              <Link to="/create">Add New Contact</Link>
            </li>
          </ul>
        </div>

        <div className="dashboard">
          <Routes>
            <Route path="/" element={<DashBoard contacts={people} />} />
            <Route path="/contact/:id" element={<ContactDetails people={people} deleteContact={deleteContact} />} />
            <Route path="/edit/:id" element={<EditContact people={people} setPeople={setPeople} />} />
            <Route path="/create" element={<AddContact addContact={addContact} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
