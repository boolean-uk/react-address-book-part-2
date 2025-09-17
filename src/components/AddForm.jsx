import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddForm({ setContacts, url }){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [street, setStreet]       = useState("");
    const [city, setCity]           = useState("");
    
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const newContact = {
            firstName,
            lastName,
            street,
            city
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact)
        })
        .then(res => res.json())
        .then(data => {
            setContacts(oldContacts => [...oldContacts, data]);
            navigate("/");
        });

    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default AddForm;