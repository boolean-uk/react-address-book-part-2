import { useState } from "react";

const initialForm = {
    firstName:"",
    lastName:"",
    street:"",
    city:"",
}

function CreateContactForm({ contacts, setContacts }) {
    const [input, setInput] = useState(initialForm)

    function handleSubmit(event) {
        event.preventDefault()

        fetch("https://boolean-api-server.fly.dev/maha897/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input)
        })
            .then((response) => response.json())
            .then((newContact) => {
                setContacts([...contacts, newContact]);
                setInput(initialForm);
            }).catch((error) => console.error("Error adding contact: ", error))

    }

    function handleChange(event) {
        const { name, value } = event.target
        setInput({...input, [name]: value})
    }

    return (
      <div className="create-form-div">
        <h2>Create contact</h2>

        <form className="create-form" onSubmit={handleSubmit}>
          <label htmlFor="fname-input">First name:</label>
          <input 
            id="fname-input" 
            name="firstName" 
            type="text" 
            onChange={handleChange}
            value={input.firstName} />
          <br />
          <br />

          <label htmlFor="lname-input">Last name:</label>
          <input 
            id="lname-input" 
            name="lastName" 
            type="text" 
            onChange={handleChange}
            value={input.lastName} />
          <br />
          <br />

          <label htmlFor="street-input">Street:</label>
          <input 
            id="street-input" 
            name="street" 
            type="text" 
            onChange={handleChange}
            value={input.street} />
          <br />
          <br />

          <label htmlFor="city-input">City:</label>
          <input 
            id="city-input" 
            name="city" 
            type="text" 
            onChange={handleChange}
            value={input.city} />
          <br />
          <br />

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
}

export default CreateContactForm