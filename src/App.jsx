import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContactDetailsPage from './components/ContactDetailsPage';
import CreateContact from './components/CreateContact';

function App() {

    const [contactData, setContactData] = useState()

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/Eddy1108/contact")
            .then(response => response.json())
            .then(setContactData)
    }, [])

    useEffect(() => {
        console.log(contactData)
    }, [contactData])

    return (
        <div className="App">
            <h1>Address Book</h1>
            <Routes>
                <Route path="/" element={<Dashboard contactData={contactData}/>} />
                <Route path="/view/:id" element={<ContactDetailsPage contactData={contactData}/>} />
                <Route path="create/" element={<CreateContact contactData={contactData} setContactData={setContactData}/>} />
            </Routes>
        </div>
    );
}

export default App;
