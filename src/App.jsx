import { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import CreateContact from "./sections/createContact/CreateContact"
import ContactView from "./sections/contactView/ContactView"
import DashBoard from "./sections/dashboard/DashBoard";
import UpdateContact from './sections/updateContact/UpdateContact';


function App() {
  const [ contacts, setContacts] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/api-docs/#/contact/getAllContacts")
    .then((response) => response.json())
    .then((data) => setContacts(data))
  }, []);


    return (
        <>   
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/create" element={<CreateContact />}/>
          <Route path="/contact/:id" element={<ContactView />}/>
          <Route path="/update/:id" element={<UpdateContact />} />
        </Routes>
        </>
    );
}

export default App;
