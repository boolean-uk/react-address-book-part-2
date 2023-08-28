import './App.css';
import { useState, useEffect } from "react"
import { Route, Routes, Link } from "react-router-dom"
import ContactList from './components/ContactList'
import ContactProfile from './components/ContactProfile';
import CreateContact from './components/CreateContact';

export default function App() {
  const [people, setPeople] = useState([])

  async function fetchPeople() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setPeople(json)
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  // console.log(people)
  
  return (
    <>
      <header>
        <h1>Address Book</h1>
        <nav>
          <ul>
           <li><Link to='/ContactList'>ContactList</Link></li>
           <li><Link to='/CreateContact'>CreateContact</Link></li>
            
              <Routes>
                <Route path="/ContactList" element={<ContactList people={people} setPeople={setPeople}/>} />
                <Route path='/view/:id' element={<ContactProfile people={people} setPeople={setPeople}/>} /> 
                <Route path='/CreateContact' element={<CreateContact people={people}/>} /> 
              </Routes>
                          
          </ul>
        </nav>
      </header>
    </>
  )
}