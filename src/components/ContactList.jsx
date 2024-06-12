import { useEffect, useState } from 'react';
import ContactListItemComponent from './ContactList/ContactListItem';

const apiURL = 'https://boolean-api-server.fly.dev/'
const gitUsername = 'moph13121'
export const fullURL = apiURL + gitUsername

export default function ContactListComponent(props) {
    const { contacts } = props

    useEffect(() => {
        fetch(`${fullURL}/contact`)
            .then(response => response.json())
            .then((data) => contacts.setContacts(data))
    }, [])

    return (
        <div>
            <header>
                <h1>
                Contacts
                </h1>
            </header>
            <ul className='contactListElement'>
                {
                    contacts.getContacts.map((contact, index) => (
                        <ContactListItemComponent key={index} contact={contact} />
                    ))
                }
            </ul>
        </div>

    )
}