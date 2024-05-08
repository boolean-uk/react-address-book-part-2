import { useEffect, useState } from "react"
import ContactsListItem from "./ContactsListItem"

export default function ContactsList(props) {
    const { contacts, setContacts } = props
    const [searchFilter, setSearchFilter] = useState('')
    const [contactFiltered, setContactFiltered] = useState(contacts)

    const loadContacts = () => {
        fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
            .then(res => res.json())
            .then(setContacts)
    }

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
            .then(res => res.json())
            .then(setContacts)
    }, [setContacts])
    
    const handleChange = (e) => {
        setSearchFilter(e.target.value)
        
        const filteringContact = contacts.filter((contact) => 
            contact.firstName.toLowerCase().includes(searchFilter.toLowerCase())
        )

        setContactFiltered(filteringContact)
    }

    return (
        <main className="contacts-list">
            <h2>Contacts</h2>

            <input 
                type="search" 
                placeholder="Search contact" 
                value={searchFilter}
                onChange={handleChange}
            />

            <ContactsListItem 
                contacts={searchFilter.length === 0 ? contacts : contactFiltered} 
                loadContacts={loadContacts}
            />
        </main>
    )
}