import './App.css';
import { useState,useEffect } from 'react';
import { Link,
Route,
Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ContactProfile from './Pages/ContactProfile/ContactProfile';
const URL = "https://boolean-api-server.fly.dev/thegrevling/contact"

function App() {
    const [contacts,setcontacts] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(setcontacts)
    }, [])
    useEffect(()=>{
        console.log(contacts)
    },[contacts])

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
            element={<Dashboard/>}
          />
          <Route path="/view/:id" element={<ContactProfile />} />
      </Routes>
    </>
    );
}

export default App;
