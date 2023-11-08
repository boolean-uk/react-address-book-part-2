import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import NewContact from './components/newcontact.jsx';
import Contacts from './components/contacts.jsx';
import Contact from './components/Contact.jsx';

function App() {
    return (
        <>
            <ul className='home-link'>
                <li><Link className="nav-link" to={'/'}>Home</Link></li>
                <li><Link className="nav-link" to={'/contacts'}>Contacts</Link></li>
                <li><Link className="nav-link" to={'/newcontact'}>Add New Contact</Link></li>
            </ul>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='/contacts'
                    element={<Contacts />}
                />

                <Route
                    path='/newcontact'
                    element={<NewContact />}
                />
                <Route
                    path='/contact/:id'
                    element={<Contact/>}
                    />

            </Routes>
        </>
    )
}

export default App;
