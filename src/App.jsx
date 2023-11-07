import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import NewContact from './components/NewContact.jsx';
import Contacts from './components/Contacts.jsx';
import Contact from './components/Contact.jsx';

function App() {
    return (
        <>
            <ul className='home-link'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Contacts'}>Contacts</Link></li>
                <li><Link to={'/NewContact'}>Add New Contact</Link></li>
            </ul>
            <Routes>

                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    path='/Contacts'
                    element={<Contacts />}
                />

                <Route
                    path='/NewContact'
                    element={<NewContact />}
                />
                <Route
                    path='/Contact/:id'
                    element={<Contact/>}
                    />

            </Routes>
        </>
    )
}

export default App;
