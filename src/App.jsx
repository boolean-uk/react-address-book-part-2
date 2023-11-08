import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';
import Dashboard from './components/Dashboard';
import { useState } from 'react';


function App() {
    
    const [reloadingNecessary, setReloadingNecessary] = useState(false)
    
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
                element={<Dashboard 
                    setReloadingNecessary={setReloadingNecessary}
                    reloadingNecessary={reloadingNecessary}
                    />}
                />
                <Route
                path="/view/:id"
                element={<ContactDetails />}
                />
                <Route
                path="/edit/:id"
                element={<EditContact 
                    setReloadingNecessary={setReloadingNecessary}
                    reloadingNecessary={reloadingNecessary}
                    />}
                />
                <Route
                path="/add"
                element={<AddContact 
                    setReloadingNecessary={setReloadingNecessary}
                    reloadingNecessary={reloadingNecessary}
                    />}
                />
            </Routes>
        </div>
    </main>
    );
}

export default App;
