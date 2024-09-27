import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContactDetailsPage from './components/ContactDetailsPage';
import CreateContact from './components/CreateContact';
import ContactList from './components/ContactList';

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

    function fetchContacts(){
        fetch("https://boolean-api-server.fly.dev/Eddy1108/contact")
        .then(response => response.json())
        .then(setContactData)
    }

    return (
        <div className="App">
            <h1>Address Book</h1>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contacts" element={<ContactList contactData={contactData}/>} />
                <Route path="/contacts/view/:id" element={<ContactDetailsPage contactData={contactData} fetchContacts={fetchContacts}/>} />
                <Route path="/contacts/create/" element={<CreateContact fetchContacts={fetchContacts}/>} />
            </Routes>
        </div>
    );
}

export default App;
