import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/main-content/MainContent';
import Navigation from './components/navigation/Navigation';
import { Route, Router, Routes } from 'react-router-dom';
import ContactsList from './components/main-content/ContactsList';
import CreateForm from './components/main-content/CreateForm';
import ContactDetails from './components/main-content/ContactDetails';

function App() {
    const url = 'https://boolean-api-server.fly.dev/FBagdeli/contact'
    const [contacts , setContact] = useState([])
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(setContact)
    }, [])

    console.log(contacts)
    return (
        <>
            <nav>
                <Navigation />
            </nav>

            <Routes>
                <Route
                    path='/' element={<ContactsList contacts={contacts}/>}
                />
                <Route
                    path='/CreateAcount' element={<CreateForm/>}
                />
                <Route
                    path='/Details' element={<ContactDetails/>}
                />
            </Routes>
        </>
        
        // <div className='appStyle'>
        //     <Navigation/>
        //     <MainContent contacts={contacts}/>
        // </div>
    );
}

export default App;
