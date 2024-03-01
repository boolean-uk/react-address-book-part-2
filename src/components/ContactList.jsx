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
            const search = searchTitle.toLowerCase()

            return contact.firstName.toLowerCase().includes(search)
            || contact.lastName.toLowerCase().includes(search)
        })
    }

    const handleFiltering = (event) =>
    {
        setSearchTitle(event.target.value)
    }

    return (
    <>
        <div id='contactList' >
            <h1 >Contacts</h1>
            <h3>Filter</h3>
            <input type='text' placeholder='Search here...' value={searchTitle} onChange={handleFiltering} />
            <ul>
            {filteredContacts.map((contact, index) =>
            (
                <li key={index}>{contact.firstName} {contact.lastName}
                    <Link to={`/contacts/${contact.id}`} >View</Link>
                </li>
            ))}
            </ul>
        </div>
    </>
    )
}