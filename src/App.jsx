import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ContactList from './components/ContactList';
import Profile from './components/Profile';
import AddContact from './components/AddContact';

export const ContactContext = createContext();


function App() {
    const url = "https://boolean-uk-api-server.fly.dev/jonavano/contact"
    const preSetContacts = []//[{firstName: 'elon',lastName: 'musk', street:'starbase', city:'mars' }, {firstName: 'sakamoto', lastName: 'ryouma', street:'showacho', city:'kochi'}, {firstName:'kiriyu',lastName: 'kasuma', street:'kabukicho', city:'東京'}]
    const [contacts, setContacts] = useState(preSetContacts);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            // const test = await push
            const jsonData = await response.json();
            setContacts(jsonData)
        };
        fetchData();
    }, [])

    return (
        <main className="dashboard">
            <section>
                <h1>Menu</h1>
                <ul>
                    <Link to={'/'}>
                        <li><p>contacts list </p></li>
                    </Link>
                    <Link to={'/add'}>
                        <li><p>add contact </p></li>
                    </Link>

                </ul>

            </section>

            <section>
                {/* <h1>right</h1> */}
                <ContactContext.Provider value={{ contacts, setContacts, url }}>

                    <Routes>
                        <Route path='/' element={<ContactList />} />
                        <Route path='/add' element={<AddContact />} />
                        <Route path='/profile/:id' element={<Profile />} />
                        <Route path='/profile/:id/update' element={<AddContact />} />

                    </Routes>
                </ContactContext.Provider>
            </section>

        </main>
    );
}

export default App;
