import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Contact() {
    const { id } = useParams()
    const [contact, setContact] = useState()

    useEffect(()  =>{
    fetch(`https://boolean-api-server.fly.dev/Shaun-Harris/contact/${id}`)
    .then((response) => response.json())
    .then((json)  => setContact(json))
    .catch((error) => console.error("Eroor fetching contact", error))
}, [id, contact])

    if (contact) {
        return (
            <main>
                <h1>
                    {contact.firstName} {contact.lastName}
                </h1>

                <h2>
                    {contact.street}
                </h2>

                <h2>
                    {contact.city}
                </h2>
            </main>
        )
    }
}

