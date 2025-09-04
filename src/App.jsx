import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { Route, Router, Routes } from 'react-router-dom';
import ContactProfile from './ContactProfile';
import ContactForm from './ContactForm';
import Menu from './Menu';

function App() {

  const contactsUrl = "https://boolean-uk-api-server.fly.dev/Richard-Persson/contact"
  const groceriesUrl = ""

  const [contacts, setContacts] = useState([])



  useEffect(()=>{

    const fetchData = async()=>{
    const  contactsRespone = await fetch(contactsUrl)
    const  groceriesResponse = await fetch(groceriesUrl)

    const contactsJson = await contactsRespone.json()
    setContacts(contactsJson)


    }

    fetchData();


  },[])




  return (


    <main>
      <Menu/>

      <Routes>
        <Route path='/' element={<Dashboard contacts={contacts}/>}/>
        <Route path='/contact/:id' element={<ContactProfile contacts={contacts}/>}/>
        <Route path='/create' element={<ContactForm/>}/>
      </Routes> 


    </main>


  );
}

export default App;
