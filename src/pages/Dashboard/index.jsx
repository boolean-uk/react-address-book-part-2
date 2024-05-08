import { useEffect, useState } from "react"
import ContactsList from "./components/ContactsList"

export default function Dashboard() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/angustownsley/contact")
        .then(response => response.json())
        .then(json => setContacts(json))
        .catch(new Error("Failed to obtain Contacts")) 
    },[])

    console.log(contacts)

    return (<ContactsList contacts={contacts}/>)
}