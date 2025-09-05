import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {useEffect, useState, createContext} from 'react'
import Dashboard from './pages/dashboard';
import Contact from './pages/contact';
import CreateContact from './pages/createContact';
import ContactEdit from './components/ContactEdit'

export const ContactContext = createContext();

function App() {
    const [contacts, setContacts] = useState([])
    const url = "https://boolean-uk-api-server.fly.dev/Skybert/contact"

    const getContacts = useEffect(() => {
        const fetchContacts = async () => {
            const result = await fetch(url);
            const jsonContacts = await result.json();
            setContacts(jsonContacts)
            //console.log(jsonContacts)
        }
        fetchContacts();
    }, [])
    console.log(contacts)

    //console.log(contacts)
    return (
        <>
            <header></header>
            <ContactContext.Provider value = {{ contacts, setContacts, url, getContacts }}>
            <div>
                <div>
                    <h2>Menu</h2>
                    <ul>
                        <li><Link to={`/`}>Contacts List</Link></li>
                        <li><Link to={`/createContact`}>Add New Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Dashboard />}></Route>
                        <Route path="/contact/:id" element={<Contact />}/>
                        <Route path="/contactEdit/:id" element={<ContactEdit />}/>
                        <Route path="/createContact" element={<CreateContact />}/>
                    </Routes>
                </div>
            </div>
            </ContactContext.Provider >
        </>
    );
}

export default App;