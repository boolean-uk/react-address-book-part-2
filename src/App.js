import './App.css';
import { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import ContactList from './components/ContactList'
import ContactProfile from './components/ContactProfile';
import CreateContact from './components/CreateContact';

export default function App() {
  
  return (
    <>
      <header>
        <h1>Address Book</h1>
        <nav>
          <ul>
           <li><Link to='/ContactList'>ContactList</Link></li>
           <li><Link to='/CreateContact'>CreateContact</Link></li>
            
              <Routes>
                <Route path="/ContactList" element={<ContactList />} />
                <Route path='/view/:id' element={<ContactProfile />} /> 
                <Route path='/CreateContact' element={<CreateContact />} /> 
              </Routes>
                          
          </ul>
        </nav>
      </header>
    </>
  )
}