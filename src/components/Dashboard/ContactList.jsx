import { useContext } from "react";
import { AppContext } from "../../App";
import ContactListItem from "./ContactListItem";

export default function ContactList() {
    const { contacts } = useContext(AppContext);

    return (
        <ul>
            {contacts.map((contact, index) => (
                <ContactListItem key={index} contact={contact} />
            ))}
        </ul>
    );
}