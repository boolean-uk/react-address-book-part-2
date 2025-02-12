import { useContext } from "react"
import { ContactsContext } from "../App"
import ContactListItem from "./ContactListItem"

export default function Dashboard() {
    const context = useContext(ContactsContext)
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {context.contacts.map((contact) =>
                    <ContactListItem contact={contact} key={contact.id} />
                )}
            </ul>
        </>
    )
}
