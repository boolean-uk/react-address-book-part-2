import { useEffect, useState } from 'react';
import './App.css';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom"
import ContactList from './components/ContactList';

function App() {
    
    const apiURL = 'https://boolean-api-server.fly.dev/'
    const gitUser = 'alkolbodo'
    const fullURL = apiURL + gitUser

    const [contacts, setContacts] = useState([])
    
    function getContacts() {
        fetch(`${fullURL}/contact`)
          .then((response) => response.json())
          .then((data) => {
              setContacts(data);
              console.log('Fetched contacts:', data);
          })
          .catch((error) => console.log(error));
      }

      useEffect(getContacts)
  

    return (
        <div className='page'>
            <div className='left-menu'>
                <h1>Menu</h1>
                <nav>
                    <ul className='left-menu-list'>
                        <li><Link to='/'>Contact List</Link></li>
                    </ul>
                </nav>
            </div>
            <main>
               <Routes>
                <Route path='/' element={<ContactList contacts={contacts} />} />


               </Routes>
            </main>
        </div>
    );
}

export default App;
