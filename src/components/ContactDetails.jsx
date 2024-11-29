import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function ContactDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [contact, setContact] = useState(null)

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact/${id}`)
            .then((res) => res.json())
            .then((data) => setContact(data))
    }, [id])

    const handleDelete = async () => {
        await fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact/${id}`, {
            method: 'DELETE',
        })

        navigate('/contacts')
        window.location.reload()
    }

    if (!contact) return <p>Loading contact...</p>

    return (
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>Street: {contact.street}</p>
            <p>City: {contact.city}</p>

            <button onClick={handleDelete}>Delete Contact</button>
            <button onClick={() => navigate(`/contacts/${id}/edit`)}>Edit Contact</button>
        </div>
    )
}
