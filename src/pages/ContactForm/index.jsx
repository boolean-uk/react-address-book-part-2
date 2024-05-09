import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ContactForm() {
    const blankForm = {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    }

    const navigate = useNavigate()

    const [formState, setFormState] = useState(blankForm)

    function handleSubmit(e) {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formState),
        }

        fetch(
            "https://boolean-api-server.fly.dev/angustownsley/contact/",
            options
        )
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => new Error("Failed to add Contact " + err))

        setFormState(blankForm)
        navigate("/dashboard")
    }

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    return (
        <main className="pages">
            
            <h1>Create New Contact</h1>
            <form className="create-contact" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name..."
                    value={formState.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name..."
                    value={formState.lastName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street..."
                    value={formState.street}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City..."
                    value={formState.city}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}
