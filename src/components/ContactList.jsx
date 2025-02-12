import { useContext } from "react"
import { DataContext } from "../App"
import { ContactItem } from "./ContactItem"

function ContactList() {

    const context = useContext(DataContext)

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                { context.contacts && context.contacts.map((contact, index) => {
                    return (
                        <li key={index}>
                            <ContactItem contact={contact} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export { ContactList }