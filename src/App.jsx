import './App.css';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom"
import ContactListComponent from './components/ContactList';
import AddContactComponent from './components/AddContact';
import { useEffect, useState } from 'react';
import ViewContactComponent from './components/ViewContact';
import EditContactComponent from './components/EditContact';



export default function App() {
    const [getContacts, setContacts] = useState([])
    const contacts = { getContacts, setContacts }



    useEffect(() => {
        console.log(getContacts)
    }, [getContacts])


    return (
        <div className='page'>
            <div className='sidebar'>
                <h1>Menu</h1>
                <nav>
                    <ul className='sidebar-list'>
                        <li><Link to='/'>Contacts List</Link></li>
                        <li><Link to='/add/'>Add New Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <main className='main'>
                <Routes>
                <Route
                    path='/'
                    element={<ContactListComponent contacts={contacts} />}
                />
                <Route
                    path='/add/'
                    element={<AddContactComponent />}
                />
                <Route 
                    path='/view/:id'
                    element={<ViewContactComponent contacts={contacts}/>}
                />
                <Route
                    path='/edit/:id'
                    element={<EditContactComponent contacts={contacts}/>}
                />
            </Routes>
            </main>
            
        </div>
    );
}

