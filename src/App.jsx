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

    const deleteContact = (id) => {
        const username = "AllyDouillette"
        const baseURL= `https://boolean-api-server.fly.dev/${username}`
        const endpoint = `/contact/${id}`
    
        const options = {
          method: "DELETE"
        }
    
        fetch(baseURL + endpoint, options)
          .then(response => response.json())
          .then(() => setReloadingNecessary(true))
      }
    
    return (
    <div className='container'>
        <aside className='sidebar'>
            <h1>Navigation</h1>
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
        <main className='main'>
            <Routes>
                <Route
                path="/"
                element={<Dashboard 
                    setReloadingNecessary={setReloadingNecessary}
                    reloadingNecessary={reloadingNecessary}
                    deleteContact={deleteContact}
                    />}
                />
                <Route
                path="/view/:id"
                element={<ContactDetails 
                        deleteContact={deleteContact}/>}
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
        </main>
    </div>
    );
}

export default App;
