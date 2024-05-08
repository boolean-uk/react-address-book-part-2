import { Link } from 'react-router-dom'

export default function ContactItem ( { contact, getData } ) {

    const handleClick = async () => {
        const deleteContact = await fetch(`https://boolean-api-server.fly.dev/MrStashy/contact/${contact.id}`, {
            method: 'DELETE'
        })
        if (deleteContact.ok) {
            console.log('Deleted')
            getData()
        }
    }

    return (
        <div className='contact-item w-[400px] flex place-items-center justify-between'>
            <p className='contact-name'>{contact.firstName} {contact.lastName}</p>
            <Link to={`${contact.id}`}><button>View</button></Link>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}