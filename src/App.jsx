import { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ContactForm from './pages/ContactForm';
import ContactProfile from './pages/ContactProfile';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate();

    function navigateToDashboard() {
        navigate('/dashboard');
    }

    function fetchContacts() {
        fetch("https://boolean-api-server.fly.dev/sebHanssen/contact", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setContacts(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }

    function postContact(contact) {
        fetch("https://boolean-api-server.fly.dev/sebHanssen/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: contact.firstName,
                lastName: contact.lastName,
                street: contact.street,
                city: contact.city
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setContacts([...contacts, data]);
            })
            .catch((error) => console.log(error));
            
    }
    function deleteContact(id) {
        fetch("https://boolean-api-server.fly.dev/sebHanssen/contact/" + id, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setContacts(contacts.filter(contact => contact.id !== parseInt(id)));
            })
            .catch((error) => console.log(error));
            
    }

    useEffect(() => {
        fetchContacts()
    }, []);

    return (
        <div className="App">
            <header>
                <h1>Address Book</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/contactform">Create Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard contacts={contacts} />}
                />
                <Route
                    path="/contactform"
                    element={<ContactForm postContact={postContact} navigateToDashboard={navigateToDashboard} />}
                />
                <Route
                    path="/view/:id"
                    element={<ContactProfile contacts={contacts} deleteContact={deleteContact} navigateToDashboard={navigateToDashboard} />}
                />
            </Routes>
        </div>
    );
}

export default App;
