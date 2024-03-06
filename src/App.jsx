import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactCreate from './components/ContactCreate';
import Contact from './components/Contact';
import ContactDelete from './components/ContactDelete';
import ContactProfile from './components/ContactProfile';
function App() {
    const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

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
            {/* <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.firstName}</li>
            ))}
            </ul> */}
        <Routes>


            <Route path="contact/:id" element={<ContactProfile  data={data} />} />

            <Route path="/contact" element={<ContactCreate data={data} setData={setData}/>} />
            <Route path="/contact/:id/delete" element={<ContactDelete data={data}/>} />
            <Route path="/" element={<Contact data={data}/>}/>

        </Routes>

        </div>
    );
}

export default App;
