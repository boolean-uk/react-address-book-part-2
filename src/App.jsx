import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, createContext, useEffect } from 'react';
import ContactsList from './components/ContactsList';
import AddContact from './components/AddContact';
import ContactInformation from './components/ContactInformation';
import DeleteContact from './components/DeleteContact';
import UpdateContact from './components/UpdateContact';
export const AppContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/Yumikitsu/contact")
        .then(response => response.json())
        .then(data => setContacts(data))
    }, [])

    const updateContacts = () => {
        fetch("https://boolean-uk-api-server.fly.dev/Yumikitsu/contact")
        .then(response => response.json())
        .then(data => setContacts(data))
    }

    return (
    <>
    <div className="Container">
      <header className="Header">
        <h1>Menu</h1>
        <nav>
          <ul>
            <li><Link to="/">Contacts List</Link></li>
            <li><Link to="/add">Add New Contact</Link></li>
            <li><Link to="/delete">Delete A Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="Information">
        <AppContext.Provider  value={{ contacts }}>
          <Routes>
            <Route path="/" element={<ContactsList />}/>
            <Route path="/add" element={<AddContact onAction={updateContacts}/>}/>
            <Route path="/view/:id" element={<ContactInformation />}/>
            <Route path="/delete" element={<DeleteContact onAction={updateContacts}/>}/>
            <Route path="/update/:id" element={<UpdateContact onAction={updateContacts} />}/>
          </Routes>
        </AppContext.Provider>
      </div>
    </div>
    </>
    )
}

export default App;
