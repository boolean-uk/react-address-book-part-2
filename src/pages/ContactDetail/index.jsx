import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ContactDetailPage() {
    const { id } = useParams();
    const [contact, setContact] = useState();
    console.log(contact)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/iscreamvann/contact/${id}`)
            .then(response => response.json())
            .then(json => setContact(json))
            .catch(error => console.error('Error fetching contact:', error));
    }, [id]);

    return (
        <>
            {contact && (
                <>
                    <h1>
                        Full-Name: {contact.firstName} {contact.lastName}
                    </h1>

                    <h2> Street: {contact.street}</h2>

                    <h2> City: {contact.city}</h2>
                </>
            )}
        </>
    );
}
