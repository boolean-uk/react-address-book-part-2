import { useNavigate } from "react-router-dom"

var isEditMode = false

export default function ContactForm({ addContactCallback, contactToEdit }) {
    const navigate = useNavigate()

    isEditMode = contactToEdit !== undefined && contactToEdit !== null && typeof(contactToEdit) === 'object' && Object.keys(contactToEdit).length > 0

    function createContactCallback(event) {
        event.preventDefault()

        const _newContact = {
            firstName: event.target.first_name.value,
            lastName: event.target.last_name.value,
            street: event.target.street.value,
            city: event.target.city.value
        }

        if (_newContact.firstName === '' && _newContact.lastName === '' && _newContact.street === '' && _newContact.city === '') return

        if (!isEditMode) {
            fetch('https://boolean-api-server.fly.dev/migzus/contact', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_newContact)
            })

            addContactCallback(_newContact)
        }
        else {
            contactToEdit.firstName = _newContact.firstName
            contactToEdit.lastName = _newContact.lastName
            contactToEdit.street = _newContact.street
            contactToEdit.city = _newContact.city

            fetch('https://boolean-api-server.fly.dev/migzus/contact/' + contactToEdit.id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactToEdit)
            })
        }

        navigate('/')
    }

    const _fillForm = {
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    if (isEditMode) {
        _fillForm.firstName = contactToEdit.firstName
        _fillForm.lastName = contactToEdit.lastName
        _fillForm.street = contactToEdit.street
        _fillForm.city = contactToEdit.city
    }

    return (
        <form onSubmit={createContactCallback}>
            <h1>{isEditMode ? "Edit" : "Create"} Contact</h1>
            <h2>First Name</h2>
            <input type="text" name="first_name" defaultValue={_fillForm.firstName} placeholder="Insert First Name..." />
            <h2>Last Name</h2>
            <input type="text" name="last_name" defaultValue={_fillForm.lastName} placeholder="Insert Last Name..." />
            <h2>Street</h2>
            <input type="text" name="street" defaultValue={_fillForm.street} placeholder="Insert Street..." />
            <h2>City</h2>
            <input type="text" name="city" defaultValue={_fillForm.city} placeholder="Insert City..." />
            <br />
            <button>{isEditMode ? "Confirm Edit" : "Create"}</button>
        </form>
    )
}
