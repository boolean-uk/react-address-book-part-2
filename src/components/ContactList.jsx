import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactList(props)
{
    const { contacts } = props
    const [searchTitle, setSearchTitle] = useState("")
    let filteredContacts = contacts

    if (searchTitle.length > 0)
    {
        filteredContacts = filteredContacts.filter((contact) => 
        {
            if (contact.firstName.toLowerCase().includes(searchTitle.toLowerCase())) return contact
            else if (contact.lastName.toLowerCase().includes(searchTitle.toLowerCase())) return contact
        })
    }

    const handleFiltering = (event) =>
    {
        setSearchTitle(event.target.value)
    }

    return (
        <>
        <h1>Contacts</h1>
        <h3>Filter</h3>
        <input type='text' value={searchTitle} onChange={handleFiltering} />
        <ul>
          {filteredContacts.map((contact, index) =>
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