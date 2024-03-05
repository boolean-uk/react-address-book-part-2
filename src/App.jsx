import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Menu from './components/Menu';
import CreateContact from './components/CreateContact';
import ContactDetails from './components/ContactDetails';
import UpdateContact from './components/UpdateContact';

function App() {
    const [contacts, setContacts] = useState([])
    const [toggle, setToggle] = useState(false)

    if(contacts === undefined) return <h3>Loading...</h3>

    return (
        <div className="app">
            <Menu />
            <Routes>
                <Route
                    path="/contactlist"
                    element={<ContactList contacts={contacts} setContacts={setContacts}/>}
                />
                <Route
                    path="/contact/create"
                    element={<CreateContact contacts={contacts} setContacts={setContacts} toggle={toggle} setToggle={setToggle} />}
                />
                <Route
                    path="/contact/:id/"
                    element={<ContactDetails contacts={contacts} />}
                />
                <Route
                    path="/contact/:id/edit"
                    element={<UpdateContact contacts={contacts} setContacts={setContacts} toggle={toggle} setToggle={setToggle} />}
                />
            </Routes>

        </div>
    );
}

export default App;
