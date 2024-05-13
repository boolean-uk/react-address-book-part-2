import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'

export default function contactList({ contactList, handleClick }) {
    
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