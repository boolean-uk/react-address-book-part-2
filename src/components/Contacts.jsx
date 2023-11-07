import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Contacts() {

 const [allContacts, setAllContacts] = useState([])
 

    useEffect(()=> {
        fetch("https://boolean-api-server.fly.dev/PeachyOmnivore/contact")
        .then(data => data.json())
        .then(data => setAllContacts(data))
    },[])

    return (
        <>
        <h1>All Contacts:</h1>
            {allContacts.map((contact)=> (
                <>
                <div key={`${contact.id}`+`${contact.firstName}`}>
                    <h2><Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link></h2>
                </div>
                </>
           ))}
        </>
    )
}

export default Contacts