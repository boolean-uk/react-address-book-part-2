import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Menu from './components/Menu';
import Form from './components/Form';

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
            <Menu></Menu>
            <Routes>
                <Route path='/' element={<Main contacts={showContact} />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </header>
        </>        
    );
}

export default App;
