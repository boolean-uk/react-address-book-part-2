import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactList from './components/Dashboard'
import AddContact from './components/AddContact'
import ViewContacts from './components/ViewContacts'
import './App.css';
import EditContact from './components/EditContact';


function App() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/ThomasKva/contact")
        .then(response => response.json())
        .then((data) => setContacts(data))
        .catch(error => 
            console.error('Could not fetch data...', error))
        })

    return (
        <>
            <h1>The Great Contact book</h1>
            <div className='container'>
                <nav>
                  <h2>Menu</h2>
                  <ul>
                    <li><Link to='/'>Contacts</Link></li>
                    <li><Link to='/add'>Add Contact</Link></li>
                  </ul>
                </nav>
                <main>
                <Routes>
                  <Route
                    path='/'
                    element={<ContactList contacts={contacts}/>}
                  />
                  <Route
                    path='/add'
                    element={<AddContact contacts={contacts} setContacts={setContacts}/>}/>
                  <Route path='/view/:id'
                      element={<ViewContacts contacts={contacts} setContacts={setContacts}/>} />
                  <Route path='/edit/:id'
                      element={<EditContact contacts={contacts} setContacts={setContacts}/>} />
                </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
