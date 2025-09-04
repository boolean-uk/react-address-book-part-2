/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Dashboard from './components/Dashboard';
import ContactView from './components/ContactView';
import CreateView from './components/CreateView';
import EditView from './components/EditView'

const AppContext = createContext();

function App() {
    const url = "https://boolean-uk-api-server.fly.dev/fanden/contact"

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setContacts(jsonData);
        };
            console.log("Fetching data...")
            fetchData()
    }, []);


    return (
<div className="container">
            <AppContext.Provider value={{ contacts }}>
            <header>
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <Link to="/">Contacts list</Link> <br></br>
                        <Link to="/create">Create new contact</Link>
                    </ul>
                </nav>
            </header>

            <main className="main">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/create" element={<CreateView/>} />
                    <Route path="/view/:id" element={<ContactView/>} />
                    <Route path="/edit/:id" element={<EditView/>}/>
                </Routes>
            </main>
        </AppContext.Provider >
        </div>
    )
}

export { App, AppContext };
