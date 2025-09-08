import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, createContext, useEffect  } from 'react'
import Contacts from './components/Contacts';
import Form from './components/Form';
import ContactItem from './components/ContactItem';
import Dashboard from './components/dashboard';
import Putt from './components/Put';

const MyContext = createContext()


function App() {
    const [deletee, setDeletee] = useState(false)
    const [contacts, setContacts] = useState([  
        
  {
    "firstName": "Johnathan",
    "lastName": "Cartwright",
    "gender": "Trans female",
    "email": "Zachariah_OKeefe85@yahoo.com",
    "jobTitle": "Direct Functionality Officer",
    "street": "N Court Street",
    "city": "Fort Arvid",
    "latitude": 43.3045,
    "longitude": -92.8677,
    "favouriteColour": "#a5fe4f",
    "profileImage": "https://www.gravatar.com/avatar/Zachariah_OKeefe85@yahoo.com?s=120&d=identicon",
    "id": 1
  }
])

    useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('https://boolean-uk-api-server.fly.dev/emazau/contact');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setContacts(result);
        } catch (err) {
          console.log(err);
        } finally {
          console.log("Loading complete");
        }
      };

      fetchData();
    }, [deletee]);

    return (
        <>




        <p>Hello, world!</p>
        <div>
        
        <Link to="/"><h2>Menu</h2></Link>
        <MyContext.Provider value={{contacts: contacts, setContacts: setContacts, setDeletee: setDeletee, deletee: deletee}}>
        <Link to="/contacts"><p>Contacts List</p></Link>
        <Link to="/form"><p>Add New Contact</p></Link>
        <Link to="/delete"><p>Delete a Contact</p></Link>

        <Routes>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/contacts/:id" element={<ContactItem/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/put/:id" element={<Putt/>}/>
            <Route path="/delete" element={<Dashboard/>}/>

        </Routes>
        </MyContext.Provider>
        </div>

        
        </> 
    );
}

export {App, MyContext};
