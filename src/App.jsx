import './App.css';
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import CreateContact from './components/CreateContact';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import Navigation from './components/Navigation';
import Update from './components/Update';
export const ApiContext = createContext();


function App() {




    const [contacts, setcontacts] = useState([]);
    const api = "https://boolean-uk-api-server.fly.dev";
    const fetchUrl = `${api}/Vegard-S/contact`;
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(fetchUrl);
        const jsonData = await response.json();
        setcontacts(jsonData);
        console.log(jsonData);
        };
        fetchData();
    }, []);
    console.log(contacts);
    

    return (
        <>
            <ApiContext.Provider value={{api, contacts, setcontacts}}>
                <div className="container-nav-main">
                <nav className="sidebar">
                    <h1>Menu</h1>
                    <Navigation />
                </nav>
                <main className="main">
                        <Routes>
                            <Route path="/" element={<ContactList />} />
                            <Route path="/create" element={<CreateContact />} />
                            <Route path="/contact/:id" element={<Contact />} />
                            <Route path="/update/:id" element={<Update />} />
                        </Routes>
                </main>
            </div>
            </ApiContext.Provider>
        </>

    );
}

export default App;




