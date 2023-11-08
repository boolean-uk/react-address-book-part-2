import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Main from './components/Main';

function App() {
const [showContact, setShowContact] = useState([]);
const URL = "https://boolean-api-server.fly.dev/PCapid3v/contact"

useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setShowContact(data))
    }, [])



    return (
        <>
        <header>
            <div className="menu">
            <h1>Contact List</h1>
            <Link to="/">Contact List</Link> <br />
            <Link to="/form">Add New Contact</Link>
            </div>
            <Routes>
                <Route path='/' element={<Main contacts={showContact} />} />
            </Routes>
        </header>
        </>        
    );
}

export default App;
