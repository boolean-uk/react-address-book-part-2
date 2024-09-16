import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactList(props)
{
    const { contacts } = props
    const [searchQuery, setSearchQuery] = useState('')

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  )

    return (
      <>
      <div className=' container'>
      <h2>Contacts</h2>
      <input
        type='text'
        placeholder='Search contacts...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      className='input-text'/>
      <ul>
        {filteredContacts.map((contact, index) =>
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