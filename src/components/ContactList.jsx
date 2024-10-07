import { useContext } from "react";
import { ContactContext } from "../App";
import ContactListItem from './ContactListItem'


export default function ContactList() {
    const { contacts } = useContext(ContactContext)
    

    return (
        <main className="contactlist">
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact, i) => (
                    <ContactListItem contact={contact} key={i}>

                    </ContactListItem>
                )
                )}
            </ul>
        </main>
    )
}