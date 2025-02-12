import { useState } from "react"

function NewContactForm() {

    const [newContact, setNewContact] = useState({
        "firstName": "",
        "lastName": "",
        "street": "",
        "city": ""
    })

    function handleChange(event) {
        if(event.target.name === "firstName") {
            setNewContact({
                ...newContact,
                "firstName": event.target.value
            })
        }
        if(event.target.name === "lastName") {
            setNewContact({
                ...newContact,
                "lastName": event.target.value
            })
        }
        if(event.target.name === "street") {
            setNewContact({
                ...newContact,
                "street": event.target.value
            })
        }
        if(event.target.name === "city") {
            setNewContact({
                ...newContact,
                "city": event.target.value
            })
        }
    }

    function handleSubmit() {

        fetch('https://boolean-uk-api-server.fly.dev/jonasmelonas/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
      
          })

        setNewContact({
            "firstName": "",
            "lastName": "",
            "street": "",
            "city": ""
        })
    }

    return (
        <div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div>
                    <label>First name <br /> </label>
                    <input type="text" name="firstName" value={newContact.firstName}></input>
                </div>
                <div>
                    <label>Last name <br /> </label>
                    <input type="text" name="lastName" value={newContact.lastName}></input>
                </div>
                <div>
                    <label>Street <br /> </label>
                    <input type="text" name="street" value={newContact.street}></input>
                </div>
                <div>
                    <label>City <br /> </label>
                    <input type="text" name="city" value={newContact.city}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export { NewContactForm }