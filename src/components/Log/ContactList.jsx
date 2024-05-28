import ContactListLog from "./ContactListLog"

export default function ContactList({ contacts}) {
  return (
    <ul>
      {contacts.map((e, index) => {
        return <ContactListLog key={index} contact={e} />
        })}
    </ul>
  )
}


