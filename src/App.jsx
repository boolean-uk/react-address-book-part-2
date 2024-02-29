import { Route, Routes, json } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import ContactList from './ContactList';
import CreateContact from './CreateContact';
import Contact from './Contact';
import { useEffect, useState} from 'react';
import {PostContactAPI } from './ConnectToAPI';

function App() {

    const [contacts, setcontacts] = useState([])

     
    useEffect(() => {
        console.log("Fetching data")
        fetch("https://boolean-api-server.fly.dev/Annemoon-de-Groen/contact", {}).then((response) =>{
            return response.json();
        }).then((jsonData) =>{
            setcontacts(jsonData)
        })
    }, [])
    


    const addContact = (newContact) =>{
        contacts.push(newContact)
        setcontacts([...contacts])
        console.log("Added", newContact, "to contacts" )
        PostContactAPI(newContact)
    }  
    return (
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<ContactList contacts={contacts}/>}/>
            <Route path='/create' element={<CreateContact addContact={addContact}/>}/>
            <Route path='/contact/:id' element={<Contact contacts={contacts}/>}/>
            <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
        </>
    );
}

export default App;
