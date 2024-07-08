import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ContactList from "./ContactList"


const url = "https://boolean-api-server.fly.dev/Vayeros/contact"

function Dashboard() {
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate() 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setContacts(data))
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => navigate("/create")}>Create</button>
            <ContactList contacts={contacts} />
        </div>
    )
}

export default Dashboard