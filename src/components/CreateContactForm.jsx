import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
    firstName:"",
    lastName:"",
    street:"",
    city:"",
}

function CreateContactForm({ contacts, setContacts }) {
    const [input, setInput] = useState(initialForm)
    const navigate = useNavigate()

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
                navigate("/")
            }).catch((error) => console.error("Error adding contact: ", error))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setInput({...input, [name]: value})
    }

    return (
      <div className="create-form-div">
        <h2 className="form-heading">Create contact</h2>

        <form className="create-form" onSubmit={handleSubmit}>
          <label htmlFor="fname-input" className="form-label">
            First name:
          </label>
          <input
            id="fname-input"
            name="firstName"
            type="text"
            className="form-input"
            onChange={handleChange}
            value={input.firstName}
          />
          <br />
          <br />

          <label htmlFor="lname-input" className="form-label">
            Last name:
          </label>
          <input
            id="lname-input"
            name="lastName"
            type="text"
            className="form-input"
            onChange={handleChange}
            value={input.lastName}
          />
          <br />
          <br />

          <label htmlFor="street-input" className="form-label">
            Street:
          </label>
          <input
            id="street-input"
            name="street"
            type="text"
            className="form-input"
            onChange={handleChange}
            value={input.street}
          />
          <br />
          <br />

          <label htmlFor="city-input" className="form-label">
            City:
          </label>
          <input
            id="city-input"
            name="city"
            type="text"
            className="form-input"
            onChange={handleChange}
            value={input.city}
          />
          <br />
          <br />

          <button type="submit" className="submit-button">
            Add contact
          </button>
        </form>
      </div>
    );
}

export default CreateContactForm