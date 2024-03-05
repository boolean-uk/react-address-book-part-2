import './App.css';
import SideBar from './components/SideBar/SideBar';
import ContactList from './components/ContactList/ContactList';
import CreateContactForm from './components/CreateContactForm/CreateContactForm';

import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import ContactView from './components/contactView/ContactView';

function App() {
  const [contactList, setContactList] = useState(null)
  const baseURL = 'https://boolean-api-server.fly.dev/RobinKaastrup/contact'
  
  const getData = () => {

  }

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(setContactList)
  }, [contactList])

  return (
    <div className='app-container'>
      <SideBar />
      <main>
        <Routes>
          <Route 
            path="/"
            element={<ContactList contactList={contactList}/>}
          />
          <Route
            path='/create'
            element={<CreateContactForm baseURL={baseURL} getData={getData}/>}
          />
          <Route
            path="/view/:id"
            element={<ContactView contactList={contactList}/>}
          />

        </Routes>
      </main>
    </div>



  );
}

export default App;
