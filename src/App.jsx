import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/main-content/MainContent';
import Navigation from './components/navigation/Navigation';

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
        <div className='appStyle'>
            <Navigation/>
            <MainContent contacts={contacts}/>
        </div>
    );
}

export default App;
