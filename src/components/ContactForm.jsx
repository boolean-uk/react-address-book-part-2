import { useNavigate } from "react-router-dom"

export default function ContactForm({ addContactCallback }) {
    const navigate = useNavigate()

    function createContactCallback(event) {
        event.preventDefault()

        const _newContact = {
            firstName: event.target.first_name.value,
            lastName: event.target.last_name.value,
            street: event.target.street.value,
            city: event.target.city.value
        }

        if (_newContact.firstName === '' && _newContact.lastName === '' && _newContact.street === '' && _newContact.city === '') return

        fetch('https://boolean-api-server.fly.dev/migzus/contact', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_newContact)
        })

        navigate('/')
        addContactCallback(_newContact)
    }

    return (
        <form onSubmit={createContactCallback}>
            <h1>Create Contact</h1>
            <h2>First Name</h2>
            <input type="text" name="first_name" placeholder="Insert First Name..." />
            <h2>Last Name</h2>
            <input type="text" name="last_name" placeholder="Insert Last Name..." />
            <h2>Street</h2>
            <input type="text" name="street" placeholder="Insert Street..." />
            <h2>City</h2>
            <input type="text" name="city" placeholder="Insert City..." />
            <br />
            <button>Create</button>
        </form>
    )
}
