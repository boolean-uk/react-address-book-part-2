import { Route, Routes } from 'react-router-dom';
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
            <p>Hello World!</p>
            <Routes>
                <Route path='/' element={<Main contacts={showContact} />} />
            </Routes>
        </header>
        </>        
    );
}

export default App;
