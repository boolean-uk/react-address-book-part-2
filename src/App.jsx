import { useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Contacts from './pages/Contacts';
import AddContact from './pages/AddContact.jsx/index.jsx';
import ViewContact from './pages/ViewContact.jsx/index.jsx';
import EditContact from './pages/EditContact.jsx/index.jsx';

function App() {    

    const [loading, setLoading] = useState(false)

    const resetData = async () => {
        setLoading(true)
        const response = await fetch("https://boolean-api-server.fly.dev/uerbzr/admin",{ method: "DELETE" })
        if (response){
            setLoading(false)
        }
    }

    return (
        <>
        <div className='app'>
        <nav>
            <div className='nav-div'>
            <Link to={'/'}>
                All contacts
            </Link>
            </div>
            <div className='nav-div'>
            <Link to={'/new/'}>
                Add new contact
            </Link>
            </div>
            <div className='nav-div' onClick={resetData}>
                Reset database
            </div>
        </nav>
        <div className='main'>
        <Routes>
            <Route path={'/'} element={!loading && <Contacts />}/>
            <Route path={'/new'} element={<AddContact />}/>
            <Route path={'/view/:id'} element={<ViewContact />}/>
            <Route path={'/edit/:id'} element={<EditContact />} />
        </Routes>
        </div>
        </div>
        </>
    );
}

export default App; 
