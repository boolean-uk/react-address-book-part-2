import Dashboard from './Sections/DashBoard';
import ViewContact from './Sections/DashBoard/Components/contactList/ViewContact';
import SideBar from './Sections/Sidebar';
import './Style/App.css';
import { Route, Routes,} from 'react-router-dom';
import { useState, useEffect} from "react"
import ContactForm from './Sections/DashBoard/Components/addContact/ContactForm';

function App() {
    const [contacts, setContact] = useState([]);
    const url = `https://boolean-api-server.fly.dev/Kanthee%20K/contact`
    
   //Calling random contacts API:
   
   useEffect(() => {
    fetch(url)
    .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
    .then(data => setContact(data))
    .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    return (
        <div className="app">
            {/* Call sections */}
            <SideBar/>
            {/* <Dashboard contacts={contacts} setContact={setContact}/> */}
        
            {/* Setting up routes references: */}
            <Routes>
            {/* 1. Dashboard: */}
                <Route 
                    path='/'
                    element={<Dashboard contacts={contacts} />}
                />
                {/* 2. ViewContact*/}
                <Route 
                    path='/view/:id'
                    element={<ViewContact/>}
                />
                 {/* 3. AddNewContact*/}
                    <Route 
                    path='/addNewContact'
                    element={<ContactForm contacts={contacts} setContact={setContact}/>}
                />
            </Routes>

        </div>
        
    );
}

export default App;
