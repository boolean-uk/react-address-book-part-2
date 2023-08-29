import './App.css'
import DataContext from './DataContext'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import CreateContact from './components/Contacts/CreateContact'
import Menu from './components/Aside/leftMenu'
import ContactInfo from './components/Contacts'
import ContactListItem from './components/Contacts/ContactListItem'

function App() {
  const [contactPerson, setContactPerson] = useState([])
  console.log(contactPerson)

  function addContact(newContact) {
    setContactPerson(prevContactPerson => [...prevContactPerson, newContact])
  }

  async function getData() {
    const retrieveContact = await fetch('https://jsonplaceholder.typicode.com/users')
    const contactData= await retrieveContact.json()
    setContactPerson(contactData)
    console.log("getting user", contactData)
  }
     
      useEffect(() =>{
        getData()
        console.log("recieved contactData")
      }, [])

    return (
        <div className='app'>
    <DataContext.Provider value={{ contactPerson, setContactPerson }}>
    <header>
      <nav>
        <Menu />
      </nav>
    </header>
    <Routes>
      <Route path="/createcontact" element={<CreateContact addContact={ addContact } />} />
      <Route path="/contacts" element={<ContactInfo />} />
      <Route path="/contacts/:id" element={<ContactListItem contactPerson={ contactPerson } />} />
    </Routes>
    </DataContext.Provider>
    </div>
)
}

export default App
