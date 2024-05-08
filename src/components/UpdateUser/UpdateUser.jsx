import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export default function UpdateUser({allContacts, setAllContacts}) {
    const urlParams = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const contact = location.state
    const [updateUserForm, setUpdateUserForm] = useState({
        firstName: '', 
        lastName: '',
        street: '',
        city: ''
    })

    const handleChange = () => {
        const {name, value} = event.target
        

        setUpdateUserForm({
            ...updateUserForm,
            [name]: value
        })
    }

    const updateAPI = (event) => {
        event.preventDefault()

        fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/contact/${urlParams.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUserForm)
        })
        .then(response => response.json())
        .then(response => setAllContacts([...allContacts, response]))

        setUpdateUserForm({
            firstName: '', 
            lastName: '',
            street: '',
            city: ''
        })

        navigate(`/view/${urlParams.id}`)
    }

    return(
        <section className="update-user-container">
            <h1>Update Contact</h1>
            <form className="updateContact-form" onSubmit={(event) => updateAPI(event)}>
                <input 
                type="text"
                name="firstName"
                placeholder={contact.firstName}
                value={updateUserForm.firstName}
                onChange={(event) => handleChange(event)}
                required
                />
                <input 
                type="text"
                name="lastName"
                placeholder={contact.lastName}
                value={updateUserForm.lastName}
                onChange={(event) => handleChange(event)}
                required
                />
                <input 
                type="text"
                name="street"
                placeholder={contact.street}
                value={updateUserForm.street}
                onChange={(event) => handleChange(event)}
                required
                />
                <input 
                type="text"
                name="city"
                placeholder={contact.city}
                value={updateUserForm.city}
                onChange={(event) => handleChange(event)}
                required
                />
                <button>Update</button>
            </form>
        </section>
    )
}