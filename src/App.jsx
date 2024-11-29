import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactCreate from './components/ContactCreate';
import Contact from './components/Contact';
import ContactProfile from './components/ContactProfile';
import ContactEdit from './components/ContactEdit';
function App() {
    const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  function deleteContact(contactId) {
  fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact/${contactId}`, {
    method: 'DELETE',
  })
  .then(response => {
    if(response.ok) {
      setData(currentData => currentData.filter(contact => contact.id !== contactId));
    }
  })
  .catch(error => console.error("Delete error: ", error));
}

  console.log(data)
    return (
        <div>
            <header>
                <h1>Menu</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/contact">Create Contact</Link>
                    </li>
                </ul>
            </nav>
        <Routes>
            <Route path="contact/:id" element={<ContactProfile  data={data} />} />
            <Route path="/contact" element={<ContactCreate data={data} setData={setData}/>} />
            <Route path="/contact/edit/:id" element={<ContactEdit data={data} setData={setData} />} />
            <Route path="/" element={<Contact data={data} deleteContact={deleteContact}/>}/>
        </Routes>

        </div>
    );
}

export default App;
