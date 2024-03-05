import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CreateContact from './components/CreateContact'
import ViewContact from './components/ViewContact'
import UpdateContact from './components/UpdateContact';

function App() {
    const [contacts, setContacts] = useState([]);

    //get contacts from api
    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/alexandra7667/contact')
            .then((response) => response.json())
            .then((result) => setContacts(result))
    }, [])  //tom = renderar en gång istället för att loopa

    return (
        <div className="App">
            <header>
                <h1>Menu</h1>
                <nav> 
                    <ul>
                        <li>
                            <Link to="/">Contact list</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Add new contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                {/* 
                
                */}
                <Route path="/" element={<Dashboard contacts={contacts}/>} />
                <Route path="/contacts" element={<CreateContact/>} />
                <Route path="/contacts/:id" element={<ViewContact contacts={contacts} />} />
                <Route path="/contacts/:id/update" element={<UpdateContact contacts={contacts} />} />
            </Routes>
        </div>
    );
}

export default App;
