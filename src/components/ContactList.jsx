import ContactListItem from './ContactListItem'
import '../styles/ContactList.css'

export default function ContactList({ contacts }) {
    return (
        <div className='cList'>
            {
            contacts ? contacts.map(contact => (
                <ContactListItem key={contacts.id} contact={contact} />
            )) :
            <p>No contacts...</p>
        }
        </div>
    )
}