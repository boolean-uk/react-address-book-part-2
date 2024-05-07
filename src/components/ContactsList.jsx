import {useState, useEffect} from 'react'
import Contact from "./Contact"

export default function ContactsList() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/PerikK/contact')
            .then(response => response.json())
            .then(setContacts)
    },[])
    console.log(contacts);
    return (
        <>  
            <h2>Contacts List</h2>    
            <ul>
                {contacts.map((contact, id) => (
                    <Contact contact={contact} key={id} />
                ))}
            </ul>
        </>
    )
}