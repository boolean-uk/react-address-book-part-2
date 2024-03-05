import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateContact(props) {
    const [contact, setContact] = useState(null)
    const { id } = useParams()
    const { contacts, setToggle, toggle } = props
    const [contactInput, setContactInput] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        setContactInput({...contactInput, [event.target.name]: [event.target.value]})
    }

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find((c) =>
            Number(c.id) === Number(id))
            setContact(matchingContact)
        }
    }, [contacts, id])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/contact/${contact.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                firstName: `${contactInput.firstName !== undefined ? contactInput.firstName[0] : contact.firstName}`,
                lastName: `${contactInput.lastName !== undefined ? contactInput.lastName[0] : contact.lastName}`,
                street: `${contactInput.street !== undefined ? contactInput.street[0] : contact.street}`,
                city: `${contactInput.city !== undefined ? contactInput.city[0] : contact.city}`,
            })
        })
        setToggle(toggle => !toggle)
        navigate("/contactlist")
    }

    if(!contact) return <p>Loading contact...</p>

    return(
        <>
        <form className="create-form" onSubmit={handleSubmit}>
            <label htmlFor="first-name-input"><b>First name </b>({contact.firstName})</label> 
            <input name="firstName" id="first-name-input" type="text" placeholder="Jane" onChange={handleChange}/>
            <label htmlFor="last-name-input"><b>Last name</b> ({contact.lastName})</label>
            <input name="lastName" id="last-name-input" type="text" placeholder="Doe" onChange={handleChange}/>
            <label htmlFor="street-input"><b>Street</b> ({contact.street})</label>
            <input name="street" id="street-input" type="text" placeholder="123 Fake St" onChange={handleChange}/>
            <label htmlFor="city-input"><b>City</b> ({contact.city})</label>
            <input name="city" id="city-input" type="text" placeholder="City McCityface" onChange={handleChange}/>
            <button>Create</button>
        </form>
        </>
    )
}

export default UpdateContact