import { ContactListProps } from '../../../model'
import ContactListItem from './ContactListItem'

export default function ContactList({ contacts }: ContactListProps) {
    return (
        <div className='contact-list'>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </div>
    )
}
