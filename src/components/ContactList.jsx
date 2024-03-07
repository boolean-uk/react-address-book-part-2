import { useEffect } from 'react'
import ContactListItem from './ListComponent.jsx/ContactListItem'

const apiURL = 'https://boolean-api-server.fly.dev/'
const gitUser = 'alkolbodo'
export const fullURL = apiURL + gitUser

export default function ContactList(props) {
    const { contacts } = props

    
    return (
        <div>
            <header>
                <h2>Contacts</h2>
            </header>
            <ul className="contact-list">
                {
                    contacts.map((contact, index) => (
                        <ContactListItem key={index} contact={contact} />
                    ))
                }
            </ul>
        </div>
    )
}