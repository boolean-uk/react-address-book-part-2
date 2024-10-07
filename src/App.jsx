
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList'
import CreateContact from './components/CreateContact'
import ContactDetail from './components/ContactDetail'
import Menu from './components/Menu';
import { createContext, useEffect, useState } from 'react';
export const ContactContext = createContext();

export default function App() {

    const url = 'https://boolean-uk-api-server.fly.dev/alihaiderkhannn/contact'

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setContacts(data);
            }
            catch(error){
                console.error("Failed to fetch the contacts", error)
            }
        }
        fetchContacts();
    }, []

)

    
return ( 
    <ContactContext.Provider value={{contacts, setContacts}}>
    <Router>
    <div className='main'>
        <Menu />
        
        <div className='main-content'>

        <Routes>
            <Route path="/contacts" element={<ContactList />} />
            <Route path="/contacts/:id" element={<ContactDetail />} />
            <Route path="/contactadd" element={<CreateContact />} />

        </Routes>


        </div>


    </div>
    </Router>
    </ContactContext.Provider>
)

}



