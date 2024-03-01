import './App.css';
import { useState,useEffect } from 'react';
import { Link,
Route,
Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import ContactProfile from './Pages/ContactProfile/ContactProfile';
const URL = "https://boolean-api-server.fly.dev/thegrevling/contact"

function App() {
    const [contacts,setcontacts] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(setcontacts)
    }, [])

    return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header> 
      <Routes>
        <Route
            path="/"
            element={<Dashboard contacts={contacts}/>}
          />
          <Route path="/view/:id" element={<ContactProfile contacts={contacts}/>} />
      </Routes>
    </>
    );
}

export default App;
