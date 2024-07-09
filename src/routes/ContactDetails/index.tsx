import { useEffect, useState } from 'react'
import { DetailsProps, Contact } from '../../model'
import { useParams } from 'react-router-dom'
import DetailsItem from './components/DetailsItem'
import { EmptyView } from '../../App'

export default function ContactDetails({ contacts }: DetailsProps) {
    const [contact, setContact] = useState<Contact>()
    const { id } = useParams()

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find(
                (contact: Contact) => contact.id === parseInt(id)
            )
            setContact(matchingContact)
        }
    }, [contacts, id])

    if (!contact) return <EmptyView />
    else return <DetailsItem contact={contact} />
}
