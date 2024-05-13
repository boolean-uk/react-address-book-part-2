import './App.css';
import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import { Routes, Route, Link } from 'react-router-dom'
import ContactDetails from './components/ContactDetails';
import AddContact from './components/AddContact';


function App() {

    const [ contactList, setContactList ] = useState([])

    const [selectedContact, setSelectedContact] = useState('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/homonoviscoding/contact`)
            .then(response => response.json())
            .then(setContactList)
            
    }, [])

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
                <menu><Link to='/'>Contact List</Link></menu>
                <menu><Link to='/add-contact'>Add New Contact</Link></menu>
            </section>
            <Routes>
                <Route 
                    path='/'
                    element={<ContactList contactList={contactList} handleClick={handleClick}/>}
                />
                <Route 
                    path='/contact-list/:id'
                    element={<ContactDetails contact={selectedContact}/>}
                />
                <Route 
                    path='/add-contact'
                    element={<AddContact />}
                />
            </Routes>
        </main>
    );
}

export default App;
