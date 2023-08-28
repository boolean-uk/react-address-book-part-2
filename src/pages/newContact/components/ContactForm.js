import { useState, useEffect } from "react"

function ContactForm(props) {
    const { contacts, setContacts } = props
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
      })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const maxId = Math.max(...contacts.map((contact) => contact.id), 0);

        const postData = {
            title: `${formData.firstName} ${formData.lastName}`,
            body: `Street: ${formData.street}, City: ${formData.city}`
          };
      
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("Response from API:", json);

              const newId = maxId + 1

              const newContact = {
                id: newId,
                name: formData.firstName + " " + formData.lastName,
                address: {
                  street: formData.street,
                  city: formData.city,
                },
              };
              setContacts((prevContacts) => [...prevContacts, newContact]);
              console.log("cont:", contacts)

        setFormData({
            firstName: "",
            lastName: "",
            street: "",
            city: "",
          });
        })
    }

    useEffect(() => {
    }, [contacts])

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
            <label htmlFor="firstName" className="label">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName}
            onChange={handleChange} required />
            </div>

            <div className="field">
            <label htmlFor="lastName" className="label">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName}
            onChange={handleChange} required />
            </div>

            <div className="field">
            <label htmlFor="street" className="label">Street:</label>
            <input type="text" id="street" name="street" value={formData.street}
            onChange={handleChange} required />
            </div>

            <div className="field">
            <label htmlFor="city" className="label">City:</label>
            <input type="text" id="city" name="city" value={formData.city}
            onChange={handleChange} required />
            </div>

            <input type="submit" value="Submit"/>
        </form>
    )
}
export default ContactForm