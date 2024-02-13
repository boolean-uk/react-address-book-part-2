import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = 'https://boolean-api-server.fly.dev/radio58/contact';

export default function ContactPage() {
    const [ contact, setContact ] = useState([]);

    const id = useParams().id;
    useEffect(() => {
        fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(data => {
            setContact(data);
        });
    }, []);
    
    return (
        <>
            <section className="contact">
                <h2>
                    Contact
                </h2>
                <h3>{contact.firstName} {contact.lastName}</h3>
                <p>{contact.street}</p>
                <p>{contact.city}</p>
            </section>
        </>
    )
}