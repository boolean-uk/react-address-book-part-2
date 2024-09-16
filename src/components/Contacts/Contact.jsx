import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Contact({contact}) {
    
    const navigate = useNavigate()

    return (
        <>
            <h4>{contact.firstName} {contact.lastName}  <Link to={`/view/${contact.id}`}>
                View</Link>
            </h4>
        </>
    )
}
