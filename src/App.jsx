import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import NewContact from './components/NewContact.jsx';
import Contacts from './components/Contacts.jsx';

const INITIAL_STATE = [
    {
        firstName: "",
		lastName: "",
		gender: "",
		email: "",
		jobTitle: "",
		street: "",
		city: "",
		latitude: 0,
		longitude: 0,
		id: 0
    }
]

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
                    element={<Contacts INITIAL_STATE={INITIAL_STATE} />}
                />

                <Route
                    path='/NewContact'
                    element={<NewContact />}
                />

            </Routes>
        </>
    )
}

export default App;
