import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditContactForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
    })

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact/${id}`)
            .then((res) => res.json())
            .then((data) => setFormData(data))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/contact/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        navigate(`/contacts`)
        window.location.reload()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>Last Name:
                <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>Street:
                <input
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                />
            </label>
            <label>City:
                <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Update Contact</button>
        </form>
    )
}
