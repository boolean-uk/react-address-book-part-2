import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchContacts() {
            const res = await fetch("https://boolean-uk-api-server.fly.dev/kerem-1034003/contact");
            const data = await res.json();
            setContacts(data);
        }
        fetchContacts();
    }, []);

    async function handleDelete(id) {
        await fetch(`https://boolean-uk-api-server.fly.dev/kerem-1034003/contact/${id}`, {
            method: "DELETE"
        });
        setContacts(contacts.filter(contact => contact.id !== id));
    }

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.firstName} {contact.lastName}</span>
                        <div>
                            <button onClick={() => navigate(`/contact/${contact.id}`)}>View</button>
                            <button onClick={() => handleDelete(contact.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
