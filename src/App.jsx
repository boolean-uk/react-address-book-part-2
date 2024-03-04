import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import ContactDetail from './components/ContactDetail';
import UpdateContact from './components/UpdateContact';

function App() {
  const [contacts, setContacts] = useState([])

  const userName = "oysteinbjo"
  const baseURL = `https://boolean-api-server.fly.dev/${userName}/contact`

  async function getData() {
    const response = await fetch(baseURL)
    const data = await response.json()
    setContacts(data)
  }

  useEffect(() => {
        getData()
  }, [])

  return (
    <main className='dashboard-layout'>
      <section>

        <h1>Menu</h1>
        <nav >
          <ul className='links'>
            <Link to="/contacts">Contact List</Link>
            <Link to="/add">Add new contact</Link>
          </ul>
        </nav>
      </section>
      <Routes>
        <Route path='/contacts'
          element={<ContactList contacts={contacts} url={baseURL} />} />
        <Route path='/add'
          element={<CreateContact url={baseURL} getData={getData}/>} />
        <Route path={`/contact/:id`} element={<ContactDetail contacts={contacts} url={baseURL} getData={getData} />} />
        <Route path={`/update/:id`} element={<UpdateContact contacts={contacts} getData={getData}/>}/>
      </Routes>
    </main>
  );
}

export default App;
