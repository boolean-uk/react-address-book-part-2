import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import DataContext from "../../DataContext"

function CreateContact() {
  const navigate = useNavigate()
  const { contactPerson, setContactPerson } = useContext(DataContext)

  const [contactForm, setContactForm] = useState({
    id: contactPerson.length + 1,
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setContactForm({
      ...contactForm,
      [name]: value
    })
  }

const handleSubmit = (event) => {
  event.preventDefault()

    const newContact = {
      id: contactPerson.length + 1,
      name: contactForm.firstName + " " + contactForm.lastName,
      address: { street: contactForm.street, city: contactForm.city }
    }

    setContactPerson([newContact, ...contactPerson])
  
  navigate("/contacts")
}

console.log("retrieved new array", contactPerson)

  return (
    <header>
      <section>
        <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create Contact</h1>
          <h2>First name</h2>
          <label>
            <input
              type="text"
              name="firstName"
              id="firstNameForm"
              value={contactForm.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <h2>Last name</h2>
          <label>
            <input
              type="text"
              name="lastName"
              id="lastNameForm"
              value={contactForm.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <h2>Street</h2>
          <label>
            <input
              type="text"
              name="street"
              id="streetForm"
              value={contactForm.street}
              onChange={handleChange}
              required
            />
          </label>
          <h2>City</h2>
          <label>
            <input
              type="text"
              name="city"
              id="cityForm"
              value={contactForm.city}
              onChange={handleChange}
              required
            />
          </label>
          <button className="formsubmit" type="submit">
            Create</button>
        </form>
      </section>
    </header>
  )
}

export default CreateContact



