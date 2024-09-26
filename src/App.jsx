import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import './App.css';
import Create from './components/Create/index.jsx'
import Contact from './components/Contact/index.jsx'
import PersonProfile from './components/Contact/PersonProfile.jsx';

function App() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/Miadog7Extra/contact")
          .then((response) => response.json())
          .then((data) => setPeople(data));
          }, []);

    return (
        <>
      <header>
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>
            <Link to="/">Dashboard</Link>
              </li>
              <li>
            <Link to="/contact">Contact List</Link>
              </li>
              <li>
            <Link to="/create">Add New Contact</Link>
              </li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route
          path="/"
        />
        <Route
          path="/contact"
          element={<Contact people={people}/>}
        />
        <Route
            path='/contact/:id'
            element={<PersonProfile people={people} />}
            />
        <Route
          path="/create"
          element={<Create />}
        />
        </Routes>
      </>
    )
}

export default App;
