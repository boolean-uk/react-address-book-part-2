import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import ContactDetails from "./components/ContactDetails"
import CreateContact from "./components/CreateContact"
import UpdateContact from "./components/UpdateContact"


import './App.css';

function App() {
    return (
        <div>
            <div className="header">
                <Link to="/" className="home-btn">HOME</Link>
            </div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contact/:id" element={<ContactDetails />} />
                <Route path="/create" element={<CreateContact />} />
                <Route path="/update/:id" element={<UpdateContact />} />
            </Routes>
        </div>
    )
}

export default App;
