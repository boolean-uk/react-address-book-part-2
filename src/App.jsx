import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ContactLists from './components/ContactLists';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Welcome from './components/Welcome/Welcome';
import Form from './components/Form';

function App() {
    const [contactLists, setContactLists] = useState([])
    const [shouldGetData, setShouldGetData] = useState(true)

    const getContactsData = () => {
        fetch('https://boolean-api-server.fly.dev/ilham-saleh/contact')
        .then(res => res.json())
        .then(data => {
            setContactLists(data)
            setShouldGetData(false)
        })
    }

    useEffect(() => {
        shouldGetData && getContactsData()
    }, [shouldGetData])


    return (
        <div className="container">
            <Menu />
            <Routes>  
                <Route path='/contact-lists' element={<ContactLists contactLists={contactLists} setContactLists={setContactLists}/>}/>
                <Route path='/contact-lists/:id' element={<Contact contactLists={contactLists} setContactLists={setContactLists} setShouldGetData={setShouldGetData}/>}/>
                <Route path='/create-contact' element={<Form getContactsData={getContactsData} shouldGetData={shouldGetData} setShouldGetData={setShouldGetData}/>}/>
            </Routes>
        </div>
        
    );
}

export default App;
