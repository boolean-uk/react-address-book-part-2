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
    <main>
        <aside>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Contact</Link>
                </li>
            </nav>
        </aside>
        <p>HELLO GUYS</p>

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
    </main>
    );
}

export default App;
