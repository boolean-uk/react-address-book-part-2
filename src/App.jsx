import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';
import Dashboard from './components/Dashboard';

function App() {
    return (
    <main className='container'>
        <aside className='sidebar'>
            <h1>My best friends</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Contact</Link>
                    </li>
                </ul>
            </nav>
        </aside>
        <div className='list'>
            LIST
        </div>
        <div className='main'>
            <Routes>
                <Route
                path="/"
                element={<Dashboard />}
                />
                <Route
                path="/view/:id"
                element={<ContactDetails />}
                />
                <Route
                path="/edit/:id"
                element={<EditContact />}
                />
                <Route
                path="/add"
                element={<AddContact />}
                />
            </Routes>
        </div>
    </main>
    );
}

export default App;
