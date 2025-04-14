import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ContactItem from './components/ContactItem';
import { ContactsContext } from './Contexts';
import { Contact } from './types';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';
//api : https://boolean-uk-api-server.fly.dev/sanderrasmussen/contact 
function App() {
  
    const [contacts, setContacts] = useState<Contact[]>([])

    return (
        <ContactsContext.Provider value={{contacts, setContacts}}>
            <div className='parentDiv'> 
            <Link to="/Contacts" className="link">Contacts</Link>
            <Link to="/AddContact" className='link'>Add Contact</Link>

            <Routes>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/Contacts/:id" element={<ContactItem/>}></Route>
                <Route path="/AddContact" element={<CreateContact/>}></Route>
                <Route path="/UpdateContact" element={<UpdateContact></UpdateContact>}></Route>
            </Routes>
            </div>
     

        </ContactsContext.Provider >

    );
}

export default App;
