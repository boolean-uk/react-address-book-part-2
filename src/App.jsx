import './App.css';
import Menu from './components/Menu';
import ContactsList from './components/ContactsList';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { useEffect, useState, createContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";
export const contactContext = createContext();

function App() {
    const url = 'https://boolean-uk-api-server.fly.dev/brandsegg/contact'
    const [contacts, setContacts] = useState();
    const [updated, setUpdated] = useState();

    useEffect(() => {
        fetchData();
    }, [contacts]);

    const fetchData = async () => {
        const response = await fetch(url)
        const jsonData = await response.json()
        setContacts(jsonData)
    };

    return (
        <div>
            <contactContext.Provider value={{contacts: contacts, setContacts:setContacts, setUpdated: setUpdated}}>
                <header>
                    <h3>Menu</h3>
                    <Menu/>
                </header>
                <Routes>
                    <Route path="/" element={<ContactsList />} />
                    <Route path="/contact/:UserId" element={<ContactInfo />} />
                    <Route path="/form" element={<ContactForm />} />
                </Routes>
             </contactContext.Provider>
        </div>
    );
}

export default App;
