import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, createContext } from 'react'
import Header from "./components/Header"
import ContactList from "./components/ContactList"
import ContactDetails from "./components/ContactDetails"
import NewContactForm from './components/NewContactForm';

const ContactContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/robin-ka/contact")
            .then(response => response.json())
            .then(data => setContacts(data))  
            .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <>
            <ContactContext.Provider value={{contacts, setContacts}}>
                <div className='container'>
                    <Header />
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<ContactList />} />
                        <Route path="/view/:id" element={<ContactDetails />} />
                        <Route path="/create/new-contact" element={<NewContactForm />} />
                    </Routes>
                </div>
            </ContactContext.Provider>
        </>
        
    );
}

export { ContactContext }
export default App ;
