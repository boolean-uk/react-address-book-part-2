import { useState } from "react"

function NewContact() {

    const [newContact, setNewContact] = useState(
        {
            firstName: '',
            lastName: '',
            city: '',
            street: ''
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewContact({ ...newContact, [name]: value })
    }

    return (
        <>
            <form action="">
                <label htmlFor="firstName">First Name:
                    <input
                        value={newContact.firstName}
                        type="text"
                        name="firstName"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <label htmlFor="lastName">Last Name:
                    <input
                        value={newContact.lastName}
                        type="text"
                        name="lastName"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <label htmlFor="city">City:
                    <input
                        value={newContact.city}
                        type="text"
                        name="city"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <label htmlFor="street">Street:
                    <input
                        value={newContact.street}
                        type="text"
                        name="street"
                        onChange={(event) => { handleChange(event) }} />
                </label><br />
                <button type="submit">Create new contact</button>
            </form>
        </>
    )
}

export default NewContact