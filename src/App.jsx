import './App.css';
import Header from './components/Header.jsx';
import ContactList from './components/ContactList.jsx';
import Navigation from './components/Navigation.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import AddForm from './components/AddForm.jsx';
import { useEffect, useState, createContext } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
    const [contacts, setContacts] = useState([]);

    const url = "https://boolean-uk-api-server.fly.dev/RoderickLei/contact";

    useEffect(() => {
        if(contacts.length === 0){
            fetch(url)
            .then(res => res.json())
            .then(setContacts);
        }
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="container-nav-main">
                <nav className="sidebar">
                    <Navigation />
                </nav>

                <main className="main">
                    <Routes>
                        <Route path="/" element={<ContactList contacts={contacts}/>} />
                        <Route path="/addcontact" element={<AddForm setContacts={setContacts} url={url} />} />
                        <Route path="/view/:id" element={<ContactInfo contacts={contacts}/>} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
