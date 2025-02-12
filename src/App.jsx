import { useEffect, useState, createContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ContactView from './pages/Contact/ContactView';
import ContactCreateForm from './pages/Contact/ContactCreateForm';
import ContactUpdateForm from './pages/Contact/ContactUpdateForm';

const MyContext = createContext()

function App() {

    const [contacts, setContacts] = useState([])
    

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact`)
        .then((res) => res.json())
        .then((data) => setContacts(data))
         
     },[])


    return (
        <>
        {<MyContext.Provider value = {{contacts, setContacts}}>
        <header>
        <h1>Menu</h1>
        <nav>
          <ul>
            <li>
            <Link to ="/contacts">Contacts list </Link>
            </li>
            <li>
            <Link to="/contact/new">Add new contact</Link>
            </li>
            <div>
            </div>
          </ul>           
        </nav>

      </header>

       
      <Routes>
        <Route
          path="/contacts"
          element={<Dashboard />}
        />
        <Route
          path="/contact/new"
          element={<ContactCreateForm />}
        />
        <Route
          path="/contact/:id"
          element={<ContactView />}
        />

<Route
          path="/contact/update/:id"
          element={<ContactUpdateForm />}
        />

      </Routes>
        </MyContext.Provider>} 
      </>
    );
}

export {App, MyContext};


