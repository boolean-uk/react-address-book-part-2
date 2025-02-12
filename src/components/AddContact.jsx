import { useContext, useState } from "react"
import { ContactContext } from "../App"
import { useNavigate } from "react-router-dom";

function AddContact() {
    const { contactList, setUpdate } = useContext(ContactContext);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Clicked")
        fetch('https://boolean-uk-api-server.fly.dev/1Bergvall/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Math.max(...contactList.map((o) => o.id + 1)),
                firstName: firstName,
                lastName: lastName,
                city: city,
                street: street
            })
        })
        setUpdate(true);
        navigate("/");

    }
    return (
        <>
            <h1>Create Contact</h1>
            <form onSubmit={handleSubmit}>
                <label >First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                <label >Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
                <label >City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                />
                <label >Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={e => setStreet(e.target.value)}
                    value={street}
                />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </>
    )
}

export default AddContact