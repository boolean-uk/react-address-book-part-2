import { useState, useEffect } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import ContactPage from './components'
import ContactProfile from './components/ContactProfile.jsx'
import ContactAdd from './components/ContactAdd.jsx'
import ContactChange from './components/ContactChange.jsx';

function App() {

    const [contacts, setContacts] = useState([])

    console.log(contacts)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StevenTPh/contact`)
          .then((response) => response.json())
          .then((data) => setContacts(data))
      }, [])

    return (
        <>
            <header>
                <h1>Adress Book</h1>
                <nav>
                    <ul>
                        <li>
                        <Link to='/'>Contacts</Link>
                        </li>
                        <li>
                            <Link to='/add'>Add Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<ContactPage
                        contacts = {contacts}
                        setPeople = {setContacts}
            
            />}/>
                <Route path='/view/:id' element={
                    <ContactProfile
                        contacts={contacts}
                        setContacts={setContacts}
                    />
                }/>
                <Route path='/add' element={
                    <ContactAdd
                        contacts={contacts}
                        setContacts={setContacts}
                    />
                }/>

                <Route path='/change/:id' element={
                    <ContactChange
                        contacts={contacts}
                        setContacts={setContacts}
                        
                    />
                }/>
                
            </Routes>
        </>
    );
}

export default App;
