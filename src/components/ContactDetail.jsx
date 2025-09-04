import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ContactDetail() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const res = await fetch(`https://boolean-uk-api-server.fly.dev/kerem-1034003/contact/${id}`);
                const data = await res.json();

                if (data && data.id) {
                    setContact(data);
                } else {
                    console.error("Contact not found");
                    setContact(null);
                }
            } catch (err) {
                console.error("Error fetching contact:", err);
                setContact(null);
            }
        }

        fetchContact();
    }, [id]);

    if (!contact) return <p>Loading contact details...</p>;

    return (
        <div>
            <h2>Contact Detail</h2>
            <p><strong>Firstname:</strong> {contact.firstName}</p>
            <p><strong>Lastname:</strong> {contact.lastName}</p>
            <p><strong>Street:</strong> {contact.street}</p>
            <p><strong>City:</strong> {contact.city}</p>
            <Link to="/">← Back to list</Link>
        </div>
    );
}
