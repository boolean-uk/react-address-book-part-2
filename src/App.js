import './App.css';
import './style.css'
import {Link, Route, Routes} from "react-router-dom"
import Contacts from './pages/Contacts/Contacts';
import NewContact from './pages/newContact/newContact';
import ContactInfo from './pages/Contacts/components/ContactInfo';
import { useEffect, useState } from 'react';


function App() {
  const [contacts, setContacts] = useState([])

  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const json = await response.json()
    setContacts(json)
  }

  useEffect(() => {
    getData()
  }, [])
    

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Menu</h2>
          <Link to='/contacts'><p>Contacts Lists</p></Link>
          <Link to='/newContact'><p>Add New Contact</p></Link>
        </div>
        <Routes>
          <Route path='/contacts' element={<Contacts contacts={contacts} setContacts={setContacts}/>}/>
          <Route path='/' element={<h4>Please select something from menu...</h4>}/>
          <Route path='/contacts/:id' element={<ContactInfo contacts={contacts}/>} />
          <Route path='/newContact' element={<NewContact contacts={contacts} setContacts={setContacts}/>}/>
        </Routes>
      </header>
    </div>
    
  );
}

export default App;
