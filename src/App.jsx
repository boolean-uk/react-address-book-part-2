import { useEffect, useState } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactList/components/ContactDetails';
import UpdateContact from './components/ContactList/components/UpdateContact';

function App() {
    const [contacts, setContacts] = useState([])
    const location = useLocation()
   
    
    const updateContacts = () => {
        fetch("https://boolean-api-server.fly.dev/AxelHan/contact")
        .then((res) => res.json())
        .then((data) => {
            const idOverFifteen = []
            data.forEach(element => {
                if(element.id > 15){
                    idOverFifteen.push(element)
                }
            });
        
            setContacts(idOverFifteen)
        })
    }

    useEffect(() => {
        updateContacts()
    }, 
    /* Fetch each time the url changes */
    [location])

    

    return (
        <>
        <div className='app-container'>
            <header className='header'>
                <h1>Menu</h1>
                <nav>
                    <Menu></Menu>
                </nav>
            </header>
            <div className='content-container'>
                <Routes>
                    <Route path="/contacts" element={<ContactList contacts={contacts}/>}></Route>
                    <Route path="/contacts/add" element={<ContactForm />}></Route>
                    <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} ></ContactDetails>}></Route>
                    <Route path="/contacts/:id/update" element={<UpdateContact contacts={contacts} ></UpdateContact>}></Route>
                </Routes>
            </div>
        </div>
        </>
    );
}

export default App;
