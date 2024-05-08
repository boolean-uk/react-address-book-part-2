import ContactsListItem from "./contactListItem"

export default function ContactsList({ contacts }) {
    return (
        <ul>
            {contacts.map((e, index) => {
                return <ContactsListItem key={index} contact={e} />
            })}
        </ul>
    )
}