import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactList/components/ContactDetails';

function App() {
    const [contacts, setContacts] = useState([])

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
            console.log(data)
            setContacts(idOverFifteen)
        })
    }

    useEffect(() => {
        updateContacts()
    }, [])

    

    return (
        <>
        <header>
            <h1>Menu</h1>
            <nav>
                <Menu></Menu>
            </nav>
        </header>
        <Routes>
            <Route path="/contacts" element={<ContactList contacts={contacts}/>}></Route>
            <Route path="/contacts/add" element={<ContactForm updateContacts={updateContacts} />}></Route>
            <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} ></ContactDetails>}></Route>
        </Routes>
        </>
    );
}

export default App;
