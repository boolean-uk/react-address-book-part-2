import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import ContactList from './components/ContactList';
import ContactProfile from './components/ContactProfile';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';

const baseURL = "https://boolean-uk-api-server.fly.dev/Hafaykon/contact"

export const ContactContext = createContext();

function App() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(baseURL)
                if(!response.ok) throw new Error("Could not retrive contacts from API")
                
                const jsonData = await response.json()

                setContacts(jsonData)
            } catch(error) {console.error("Fetch error:", error);}   
        }
        fetchData()
    }, [])

    return (
        <>
            
            <ContactContext.Provider value={ {contacts, setContacts} }>
                <Link to="/" className="btn btn-primary ms-4 mt-3 me--6">Home</Link>
                <main className="container d-flex  justify-content-between p-2" style={{border: "solid grey"}}>
                    <div className="col ps-5">
                        <h1 className="ps-4">Menu</h1>
                        <nav>
                            <ul>
                                <li> <Link to="/">Contacts List</Link>  </li>
                                <li> <Link to="/add">Add New Contact</Link>   </li>
                            </ul>
                        </nav> 
                    </div>                
                <Routes>
                    <Route path="/" element={<ContactList/>} />
                    <Route path="/add" element={<AddForm/>} />
                    <Route path="/view/:id" element={<ContactProfile/>} />
                    <Route path="/view/:id/update" element={<UpdateForm/>} />
                </Routes>
                </main>
            </ContactContext.Provider>

        </>
    );
}

export default App;
