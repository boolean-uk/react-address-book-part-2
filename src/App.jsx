import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import CreateContact from "./components/CreateContact";
import { useState, useEffect } from "react";

function App() {
    const url = "https://boolean-uk-api-server.fly.dev/hansjhaland/contact";
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container-nav-main'>
            <nav className='sidebar'>
                <Navigation />
            </nav>
            <main className='main'>
                <Routes>
                    <Route path="/" element={<ContactList data={data} />} />
                    <Route path="/contacts/:id" element={<ContactDetails data={data}/>}/>
                    <Route path="/contacts/add" element={<CreateContact fetchData={fetchData}/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
