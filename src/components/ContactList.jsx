import ContactItem from './ContactItem'
import { useEffect, useState } from 'react'

export default function ContactList () {
    const [contacts, setContacts] = useState([])

useEffect(() => {
    const getData = async () => {
        const data = await fetch('https://boolean-api-server.fly.dev/MrStashy/contact')
        const json = await data.json()
        setContacts(json)
    }
    getData()
}, [])

    return (
        <>
            <h2>
                Contacts
            </h2>
            {
                contacts.map((contact, index) => {
                    return (
                        <ContactItem key={index} contact={contact}/>
                    )
                })
            }
        </>
    )
}