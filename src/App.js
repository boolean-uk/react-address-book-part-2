import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ContactsList from './components/ContactsList';
import ContactPreview from './components/ContactPreview';
import DataContext from './DataContext';

function App() {
    const [contacts, setContacts] = useState([])
    const [targetContact, setTargetContact] = useState({})

    async function getContacts () {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const json = await response.json()
        setContacts(json)
    }

    useEffect(() => {
        getContacts()
    },[])

    return (
        <div className='app'>
            <DataContext.Provider value={{contacts, targetContact, setTargetContact}}>
            <h1>Contacts</h1>
            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/contacts'}>Contacts List</Link></li>
                    <li>Contacts</li>
                </ul>
            </div>

            <Routes>
                <Route path='/contacts' element={<ContactsList contacts={contacts}/>} />
                <Route path='/contacts/:id' element={<ContactPreview/>}/>

            </Routes>
            </DataContext.Provider>
        </div>
    );
}

export default App;
