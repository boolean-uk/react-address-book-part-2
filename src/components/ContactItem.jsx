import { Link } from 'react-router-dom'

export default function ContactItem ( {contact} ) {
    return (
        <div className='contact-item'>
            <p className='contact-name'>{contact.firstName} {contact.lastName}</p>
            <Link to={`${contact.id}`}>View</Link>
        </div>
    )
}