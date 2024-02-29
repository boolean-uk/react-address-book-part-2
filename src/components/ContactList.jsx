import { Link } from 'react-router-dom';

export default function ContactList(props)
{
    const { contacts } = props

    return (
        <>
        <h1>Contacts</h1>
        <ul>
          {contacts.map((contact, index) =>
          (
            <li
            key={index}>{contact.firstName} {contact.lastName}
            <Link to={`/contacts/${contact.id}`} >View</Link>
            </li>
          ))}
        </ul>
        </>
    )
}