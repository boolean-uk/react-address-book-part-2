import { useEffect, useState } from "react"
import ContactList from "../components/ContactList"
import '../styles/Dashboard.css'
import { useNavigate } from "react-router-dom"
export default function Dashboard() {
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/spectraldesign/contact')
            .then(response => response.json())
            .then(data => setContacts(data))
    }, [])
    return (
        <div className="dashboard-container">
            <h1 className="title">Dashboard</h1>
            <button className="createButton" onClick={() => navigate("/create")}>Create Contact</button>
            <ContactList contacts={contacts} />
        </div>
    )
}