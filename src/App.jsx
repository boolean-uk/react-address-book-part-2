import { Route, Routes, json, useNavigate } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import ContactList from './ContactList';
import CreateContact from './CreateContact';
import Contact from './Contact';
import { useEffect, useState} from 'react';
import {Delete, PostContactAPI, Update } from './ConnectToAPI';
import UpdateContact from './UpdateContact';

function App() {

    const [contacts, setcontacts] = useState([])
    const navigate = useNavigate()
     
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

    const deleteContact = (contact =>{
        contacts.splice(contacts.indexOf(contact), 1)
        setcontacts([...contacts])
        Delete(contact.id)
        navigate("/")
    })

    const updateContact = (id, updateContact) =>{
        setcontacts([...contacts.map((c) => {if (`${c.id}` === `${id}`) {return updateContact} else return c})])
        navigate(`/contact/${id}`)
        Update(id, updateContact)
    }

    return (
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<ContactList contacts={contacts}/>}/>
            <Route path='/create' element={<CreateContact addContact={addContact}/>}/>
            <Route path='/update/:id' element={<UpdateContact contacts={contacts} UpdateContact={updateContact}/>}/>
            <Route path='/contact/:id' element={<Contact contacts={contacts} deleteContact={deleteContact}/>}/>
            <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
        </>
    );
}



export default App;
