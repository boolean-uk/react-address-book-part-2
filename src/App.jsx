import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import Menu from './components/Menu';
import ContactsList from './components/ContactsList';
import AddContactForm from './components/AddContactForm';
import ContactView from './components/ContactView';
export const ContactContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])
    const [nextId, setNextId] = useState(0)

    // We need to keep track of id... do this by getting the highest available id and continue
    // incrementing it from there... should never be a collision (hopefully :D)!
    function createNextId(array) {
        let newId = 0
        array.forEach(function (item) {
            if (item.id > newId) newId = item.id
        })
        newId = newId + 1
        console.log(newId)
        setNextId(newId)
    }

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://boolean-uk-api-server.fly.dev/tvaltn/contact"
            const response = await fetch(url)
            const jsonData = await response.json()
            console.log(jsonData)
            createNextId(jsonData)
            setContacts(jsonData)
        }
        fetchData()
    }, [])

    return (
        <main className='app-layout'>
            <ContactContext.Provider
                value={{ contacts: contacts, setContacts: setContacts, nextId: nextId, setNextId: setNextId }}
            >
            <Menu/>
            <Routes>
                <Route path="/" element={<ContactsList/>} />
                <Route path="add" element={<AddContactForm/>} />
                <Route path="add/:id" element={<AddContactForm/>} />
                <Route path="view/:id" element={<ContactView/>} />
            </Routes>
            </ContactContext.Provider>
        </main>
    );
}

export default App;
