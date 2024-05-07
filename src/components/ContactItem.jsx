import { Link } from 'react-router-dom'

export default function ContactItem ( { contact } ) {

    const handleClick = async () => {
        const deleteContact = await fetch(`https://boolean-api-server.fly.dev/MrStashy/contact/${contact.id}`, {
            method: 'DELETE'
        })
        if (deleteContact.ok) {
            console.log('Deleted')
        }
    }

    return (
        <div className='contact-item'>
            <p className='contact-name'>{contact.firstName} {contact.lastName}</p>
            <Link to={`${contact.id}`}>View</Link>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}