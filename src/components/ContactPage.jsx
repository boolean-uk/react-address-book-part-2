import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function ContactPage(){
    const {id} = useParams()
    const [contact, setContact] = useState(null)

    useEffect(() => {
        // Fetch contact details based on the ID
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact/${id}`)
          .then(response => response.json())
          .then(data => setContact(data))
          .catch(error => console.error('Error fetching contact details:', error));
      }, [id]);

    if (!contact) return <p>Loading...</p>

    return (
        <article>
            <h2>
                {contact.firstName} {contact.lastName}
            </h2>
            <ul>
                <li><b>Gender: </b>{contact.gender}</li>
                <li><b>Email: </b>{contact.email}</li>
                <li><b>Job title: </b>{contact.jobTitle}</li>
            </ul>
            <h3>Address:</h3>
            <ul>
                <li>{contact.street},</li>
                <li>{contact.city}</li>
            </ul>
            <Link to={`/update/${contact.id}`} state={{contact: contact}}>Edit contact</Link>
        </article>
    )
}