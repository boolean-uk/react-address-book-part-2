import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ContactView() {
    const { id } = useParams()
    const [contact, setContact] = useState()

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/angustownsley/contact/${id}`)
            .then((response) => response.json())
            .then((json) => setContact(json))
    }, [id, contact])
    if (contact) {
        return (
            <>
                <h1>
                    {contact.firstName} {contact.lastName}
                </h1>

                <h2>
                    {contact.street}
                </h2>

                <h2>
                    {contact.city}
                </h2>
            </>
        )
    }
}
