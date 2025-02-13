import { createContext } from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList'
import AddNewContact from './components/AddNewContact'
import ContactInfo from './components/ContactInfo'
import UpdateContact from './components/UpdateContact'

const DataContext = createContext()

function App() {
    const [users, setUsers] = useState([])
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        console.log("entered use")
        fetch("https://boolean-uk-api-server.fly.dev/thomaskri0801/contact")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [trigger])

    console.log(users)

    return (
        <div>
            <header>
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Contact List</Link></li>
                        <li><Link to="/add">Add New Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <DataContext.Provider value={ { users, setUsers, trigger, setTrigger } }>
                    <Routes>
                        <Route path='/' element={<ContactList/>}/>
                        <Route path='/contact/:id' element={<ContactInfo/>}/>
                        <Route path='/updatecontact/:id' element={<UpdateContact/>}/>
                        <Route path='/add' element={<AddNewContact/>}/>
                    </Routes>
                </DataContext.Provider>
            </main>
        </div>
    );
}

export {App, DataContext};
