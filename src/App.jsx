import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import View from './components/View/View';
import ContactForm from './components/ContactForm/ContactForm';
import UpdateContact from './components/UpdateContact/UpdateContact';

function App() {
    const [contacts, setContacts] = useState([])    
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {              
        fetch("https://boolean-api-server.fly.dev/louisshr/contact", {
            method: 'GET'
        })
        .then(response => response.json())
        .then((data) => setContacts(data))
    }, [location.pathname])

    const remove = (id) => {
        fetch(`https://boolean-api-server.fly.dev/louisshr/contact/${id}`,{
            method: "DELETE"
        })
        .then(response => {
            if (response.ok){
                navigate("/")                
            }
            else{
                console.log("Feil i Fetch")
                return
            }
        })
    }
    
    return (
        <div className='split'>
            <div>
              <h1>Menu</h1>
              <ul>
                <li><Link to="/">Contacts List</Link></li>
                <li><Link to="/createcontact">Add New Contact</Link></li>                                
              </ul>
            </div>                               
            <Routes>                
                <Route path='/' element={<Contact contacts={contacts}/>} />
                <Route path='/view/:id' element={<View contacts={contacts} remove={remove} />}/>
                <Route path='/createcontact' element={<ContactForm/>} />
                <Route path='/updatecontact' element={<UpdateContact contacts={contacts} />} />
            </Routes>              
        </div>        
    );
}

export default App;
