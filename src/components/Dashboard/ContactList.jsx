import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function ContactList({contacts, setContacts}) {

    const url = 'https://boolean-uk-api-server.fly.dev/kristofferblucher/contact'
    
    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {

        const response = await fetch(url)
        const data = await response.json()
        setContacts(data)
        
    }
    
    

    return(
        <div className='contact-list'>
        <h2>Contact List</h2>
        {contacts.map(contact => (
            <Link key={contact.id} to={`/contact/${contact.id}`}>
            <div className="contact-card" > 
                <h5>{`${contact.firstName} ${contact.lastName}`}</h5>
            </div>
            </Link>
        ))}
    </div>
);


}
export default ContactList;