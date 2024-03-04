import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function UpdateContact() {
    const location = useLocation()
    const {contact} = location.state
    const navigate = useNavigate()

    const newContact = {    
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        jobTitle: "",
        street: "",
        city: ""
    }

    const [contactForm, setContactForm] = useState(contact)

    function handleInput(event){
        const inputContact = {...contactForm}
        inputContact[event.target.name] = event.target.value
        setContactForm(inputContact)
    }

    function handleSubmit(event){
        event.preventDefault()
        // log to see if everything is working well
        console.log(contactForm)
        // PUT to API
        updateDb()
        // return to contacts list
        navigate(`/contacts/${contact.id}`)
    }
    // default values on load
    useEffect(() => {
        setContactForm(contact || newContact)
    }, [])

    const updateDb = async () => {
        const reqOptions = {
          method: 'PUT',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify(contactForm)
        }
    
        await fetch(`https://boolean-api-server.fly.dev/mkmbaran/contact/${contactForm.id}`, reqOptions)
      }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Update Contact</h2>
            <h3>Full name</h3>
            <label htmlFor="firstName"> First Name </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={contactForm.firstName}
                onChange={handleInput}
                required
            />
            <label htmlFor="lastName"> Last Name </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={contactForm.lastName}
                onChange={handleInput}
            />
            <br/>
            <label htmlFor="gender"> Gender </label>
            <input
                type="text"
                id="gender"
                name="gender"
                value={contactForm.gender}
                onChange={handleInput}
            />
            <label htmlFor="email"> Email </label>
            <input
                type="text"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInput}
                required
            />
            <br/>
            <label htmlFor="jobTitle"> Job Title </label>
            <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={contactForm.jobTitle}
                onChange={handleInput}
            />
            <h3>Address</h3>
            <label htmlFor="street"> Street </label>
            <input
                type="text"
                id="street"
                name="street"
                value={contactForm.street}
                onChange={handleInput}
            />
            <label htmlFor="city"> City </label>
            <input
                type="text"
                id="city"
                name="city"
                value={contactForm.city}
                onChange={handleInput}
            />
            <button type="submit">Complete</button>
        </form>
    )
}