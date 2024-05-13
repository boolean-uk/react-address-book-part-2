import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function contactList({ handleClick }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ contactList, setContactList ] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/homonoviscoding/contact`)
            .then(response => response.json())
            .then(setContactList)
            
    }, [])
    
    return (
        <>
            <header className='left-header'>
                <h1>Contacts</h1>
            </header>

            <section className='main-section'>
                <ul className='list-contacts'>
                    {contactList.map(contact =>
                        <li key={contact.id}> { contact.firstName } {contact.lastName} 
                        
                        <Link to={`/contact/${contact.id}`} onClick={() => handleClick(contact.id)}><button>View</button></Link></li>
                        )
                    }  
                </ul>
            </section>
        </>
    )
}