import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "./Form"

export default function CreateContact() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })

    const handleChange = (e) => {
        const { name , value } = e.target

        setFormData({
            ...formData,
            [name]: value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        
        navigate('/')
    }

    return (
        <main className="create-contact">
            <h2>Create Contact</h2>

            <Form 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </main>
    )
}