import { useEffect } from "react"
import { useState } from "react"

function Contacts({INITIAL_STATE}) {

 const [allContacts, setAllContacts] = useState(INITIAL_STATE)

    useEffect(()=> {
        fetch("https://boolean-api-server.fly.dev/PeachyOmnivore/contact")
        .then(data => data.json())
        .then(data => setAllContacts(data))
    },[])

    return (
        <>
        <h1>All Contacts</h1>
            {allContacts.map((contact)=> (
                <div key={`${contact.id}`+`${contact.firstName}`}>
                    <h2>{contact.firstName}</h2>
                </div>
            ))}
            
        </>
    )
}

export default Contacts