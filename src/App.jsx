import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import PersonProfile from './components/PersonProfile';
import { useState, useEffect, createContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import UpdateContact from './components/UpdateContact';
export const ContactContext = createContext();

function App() {
    const [contactList, setContactList] = useState([]);
    const [update, setUpdate] = useState(true);
    const url = 'https://boolean-uk-api-server.fly.dev/1Bergvall/contact'
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setContactList(jsonData);
            setUpdate(false);
          };
          fetchData();
    },[update])
    return (
        <>
        <ContactContext.Provider value={{contactList, setContactList, setUpdate}}>
        <div>
            <h1>Menu</h1>
            <nav>
                <ul>
                    <li> 
                        <Link to="/">Contact List </Link>
                    </li>
                    <li>
                        <Link to="/newContact">Add New Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Routes>
            <Route path="/" element={<ContactList/>} />
            <Route path="/newContact" element={<AddContact/>} />
            <Route path="/updateContact/:id" element={<UpdateContact/>} />
            <Route path="/view/:id" element={ <PersonProfile/>}/>
        </Routes>
        </ContactContext.Provider>
      </>
    );
}

export default App;
