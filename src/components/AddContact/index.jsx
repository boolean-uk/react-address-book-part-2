export default function AddContact({contact, setContact, setAllContacts}) {

    const handleChange = () => {
        const {name, value} = event.target

        setContact({
            ...contact,
            [name]: value,
        })
    }

    const updateApi = (event) => {
        event.preventDefault()
        console.log(contact)
        fetch('https://boolean-uk-api-server.fly.dev/tzoltie/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(response => setAllContacts(response))
        
    }

    return (
        <section className="addContacts-container">
            <h1>Add To Contacts</h1>
            <form className="addContacts-form" onSubmit={(event) => updateApi(event)}>
                <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={contact.firstName}
                onChange={(event) => handleChange(event)}/>
                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={contact.lastName}
                onChange={(event) => handleChange(event)}/>
                <input 
                type="text"
                name="street"
                placeholder="Street"
                value={contact.street}
                onChange={(event) => handleChange(event)}/>
                <input 
                type="text"
                name="city"
                placeholder="City"
                value={contact.city}
                onChange={(event) => handleChange(event)}/>
                <button>Submit</button>
            </form>
        </section>
        
    )
}