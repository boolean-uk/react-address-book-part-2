import { useEffect, useState } from "react";
import ContactsList from "./components/contactList";

export default function ContactListPage() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/iscreamvann/contact")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to obtain Contacts");
                }
                return response.json();
            })
            .then(json => setContacts(json))
            .catch(error => console.error("Error fetching contacts:", error));
    }, []);

    return <ContactsList contacts={contacts} />;
}

