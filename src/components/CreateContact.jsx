import { useState } from "react"

function CreateContact() {
    const [currentId, setCurrentId] = useState(16)

    const clearForm = {
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        id: currentId,
    }

    const [contactData, setContactData] = useState(clearForm)

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setContactData(contactData => ({
            ...contactData,
            [inputName]: inputValue,
        }));
    }

    const submitForm = (event) => {
        //log answers to console
        //console.log(contactData)

        event.preventDefault()

        //skicka till api med post request
        fetch('https://boolean-api-server.fly.dev/alexandra7667/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData)
        })

        //cleara form
        setContactData(clearForm)

        //increment currentId
        setCurrentId(currentId => currentId + 1)
    }

    return (
        <div>
            <h2>Create new contact</h2>
            < form className="form" >
                <label>First name
                    <input
                        type="text"
                        name="firstName"
                        value={contactData.firstName}
                        onChange={handleChange}>
                    </input>
                </label>

                <label>Last name
                    <input
                        type="text"
                        name="lastName"
                        value={contactData.lastName}
                        onChange={handleChange}>
                    </input>
                </label>

                <label>Street
                    <input
                        type="text"
                        name="street"
                        value={contactData.street}
                        onChange={handleChange}>
                    </input>
                </label>

                <label>City
                    <input
                        type="text"
                        name="city"
                        value={contactData.city}
                        onChange={handleChange}>
                    </input>
                </label>

                <input
                    className="form__submit"
                    type="submit"
                    value="Create"
                    onClick={submitForm} />
            </form >
        </div>
    )
}

export default CreateContact