import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddForm() {
    const emptyForm ={
        firstName: "",
        lastName: "",
        street: "",
        city: "",
    }

    const routing = useNavigate()
    const [addState, setAddState] =useState(emptyForm)

    function handleAddition(e) {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(addState)
        }

        fetch(
            "https://boolean-api-server.fly.dev/Shaun-Harris/contact",
            options
        )
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => new Error("Your contact failed to be added to your contacts list" + err))

            setAddState(emptyForm)
            routing("/log")
    }

    function handleChange(e) {
        setAddState({ ...addState, [e.target.name]: e.target.value })
    }

    return (
        <main className="pages">

            <h1>Add a New Contact</h1>
            <form className="add-contact" onSubmit={handleAddition}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={addState.firstName}
                    onChange={handleChange}
                />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={addState.lastName}
                    onChange={handleChange}
                />
                  <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={addState.street}
                    onChange={handleChange}
                />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={addState.city}
                    onChange={handleChange}
                />
                <button type="add">Add Contact</button>
            </form>
        </main>
    )
}