import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { NewContactForm } from './components/NewContactForm';
import { createContext, useEffect, useState } from 'react';
import { ContactProfile } from './components/ContactProfile';

const DataContext = createContext()

function App() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/jonasmelonas/contact")
        .then(data => data.json())
        .then(data => setContacts(data))
        console.log("runs")
    }, [])

    console.log(contacts)

    return (
        <>
            <header>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/">Contact List</Link>
                    </li>
                    <li>
                        <Link to="/newcontact">Create New Contact</Link>
                    </li>
                </ul>
            </header>
            <DataContext.Provider value={{ contacts, setContacts }} >
                <Routes>
                    <Route path='/' element={ <Dashboard /> } />
                    <Route path='/newcontact' element={ <NewContactForm /> } />
                    <Route path='/contact/:id' element={ <ContactProfile /> } />
                </Routes>
            </DataContext.Provider>
        </>
    );
}

export { App, DataContext };
