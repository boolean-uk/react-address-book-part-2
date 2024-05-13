import './App.css';
import { useState } from 'react'
import ContactList from './components/ContactList'
import { Routes, Route, Link } from 'react-router-dom'
import ContactDetails from './components/ContactDetails';


function App() {

    const [selectedContact, setSelectedContact] = useState('')

    const handleClick = (e) => {
        setSelectedContact(e)
    
    }

    return (
        <main>

            <header className='right-header'>
                <h1 className='side-header'>
                    Menu
                </h1>
            </header>

            <section className='section-menu'>
                <menu><Link to='/contact-list'>Contact List</Link></menu>
                <menu>Add New Contact</menu>
            </section>
            <Routes>
                <Route 
                    path='/contact-list'
                    element={<ContactList handleClick={handleClick}/>}
                />
                <Route 
                    path='/contact/:id'
                    element={<ContactDetails contact={selectedContact}/>}
                />
            </Routes>
        </main>
    );
}

export default App;
