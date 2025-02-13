import { createContext, useEffect, useState } from 'react'
import './App.css'
import Dæshboard from './components/Dashboard'
import {Contact} from './components/interfaces'
import Navigator from './components/Navigator'
import ContactDetail from './components/ContactDetail'
import AddContact from './components/AddContact'
import { Route, Routes } from 'react-router'

export const ContactContext = createContext<{
contacts: Contact[];
updateContacts: () => void;
}>(null!);

async function fetching() {
  const response = await fetch(
    "https://boolean-uk-api-server.fly.dev/AkselSau/contact"
  );
  const jsonData = await response.json();
  console.log(jsonData)
  return jsonData;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  //https://boolean-uk-api-server.fly.dev
  //𒂝 𒈙	𒈚 𒌦 𒌋 𒊹

  useEffect(() => {
    fetching().then(setContacts); 
  }, []);

  const updateContacts = () => {
    fetching().then(setContacts);
  };

  return (
    <ContactContext.Provider value={{contacts, updateContacts}}>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Dæshboard />}/>
        <Route path="/contacts/:id" element={<ContactDetail/>}/>
        <Route path="/create" element={<AddContact/>}/>
      </Routes>
    </ContactContext.Provider>
  )
} 
export default App
