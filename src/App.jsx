import { useEffect, useState } from 'react';
import './App.css';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom"
import ContactList from './components/ContactList';
import ViewContact from './components/ViewContact';
import { fullURL } from './components/API-Helper';
import EditContact from './components/EditContact';
import CreateContact from './components/CreateContact';


function App() {

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

      useEffect(() => {getContacts()}, [])
  

    return (
        <div className='page'>
            <div className='left-menu'>
                <h1>Menu</h1>
                <nav>
                    <ul className='left-menu-list'>
                        <li><Link to='/'>Contact List</Link></li>
                        <li><Link to='/add/'>Add new contact</Link></li>
                    </ul>
                </nav>
            </div>
            <main className='main'>
               <Routes>
                <Route path='/' element={<ContactList contacts={contacts} />} />

                <Route path='/add/' element={<CreateContact contacts={contacts} />} />

                <Route path='/view/:id' element={<ViewContact />}></Route>

                <Route path='/edit/:id' element={<EditContact contacts={contacts} />}></Route>
               </Routes>
            </main>
        </div>
    );
}

export default App;
