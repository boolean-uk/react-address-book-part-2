/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import './App.css';
import { useEffect, useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GetAllContacts } from './components/ContactAPI/ContactAPIs';
import Dashboard from './components/pages/Dashboard';
import ContactsProfile from './components/pages/Dashboard/components/ContactProfile';
import ContactsList from './components/pages/Dashboard/components/ContactsList';
import CreateContactsForm from './components/pages/Forms/CreateContactsForm';

export const AppContext = createContext()

function App() {

    const [contacts, setContacts] = useState([])
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    const fetchContacts = async () => {
        try{
            const result = await GetAllContacts()
            setContacts(result)
        } catch (error) {
            console.error("Error in fetching contacts: " + error);
        }
    }
    useEffect(() => {
        fetchContacts()
    }, [contacts] )
    return (
        <AppContext.Provider value={{ contacts, setContacts, formData, setFormData }}>
            <div className="container">
                
                <Routes>
                    <Route path="/" element = {<Dashboard/>}></Route>
                    <Route path="/contacts" element={<ContactsList/>}></Route>
                    <Route path="/view/:id" element = {<ContactsProfile/>}></Route>
                    <Route path="create" element = {<CreateContactsForm/>}></Route>
                    <Route path="/update/:id" element={<CreateContactsForm />} />

                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
