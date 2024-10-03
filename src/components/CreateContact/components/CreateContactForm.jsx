import { useContext, useState } from "react"
import { ContactsContext } from "../../../App"

function CreateContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")

    const contactsContext = useContext(ContactsContext)
    const { addContact } = contactsContext

    const onSubmit = (e) => {
        const obj = {
            "firstName": firstName,
            "lastName": lastName,
            "street": street,
            "city": city
        }
        addContact(obj)
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
            /><br />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
            /><br />
            <label htmlFor="street">Street</label>
            <input
                type="text"
                id="street"
                name="street"
                onChange={e => setStreet(e.target.value)}
                value={street}
            /><br />
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                onChange={e => setCity(e.target.value)}
                value={city}
            /><br />
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateContactForm
