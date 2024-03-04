import { Link } from 'react-router-dom';

export default function ContactList(props)
{
    const { contacts } = props

    return (
        <>
        <div className=' container'>
        <h1>Contacts</h1>
        <ul>
          {contacts.map((contact, index) =>
          (
            <li className='container_view'
            key={index}>{contact.firstName} {contact.lastName} <br />
             <button className='btn'><Link to={`/contacts/${contact.id}`} >View</Link></button> 
            </li>
          ))}
        </ul>
        </div>
        </>
    )
}