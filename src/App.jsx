import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/Index';

function App() {
    const [allContacts, setAllContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/tzoltie/contact')
        .then(response => response.json())
        .then(json => setAllContacts(json))
    }, [])

    
    return (
        <>
        <ContactList allContacts={allContacts}/>
        </>
    );
}

export default App;
