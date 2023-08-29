import { useState, useEffect } from "react"

function ContactUpdateForm(props) {
    const { contacts, setContacts, contactToUpdate } = props

    const [formData, setFormData] = useState({ ...contactToUpdate })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value })
    }

    const handleUpdate = () => {
      const updatedContacts = [...contacts]

      const contactIndex = updatedContacts.findIndex((contact) => contact.id === contactToUpdate.id)

        if (contactIndex !== -1) {
          const updatedContact = { ...updatedContacts[contactIndex] }

          updatedContact.firstName = formData.firstName
          updatedContact.lastName = formData.lastName

          updatedContact.name = `${formData.firstName} ${formData.lastName}`

          updatedContact.address = updatedContact.address || {};

          updatedContact.address.street = formData.street
          updatedContact.address.city = formData.city

          updatedContacts[contactIndex] = updatedContact;

        setContacts(updatedContacts)

        updatedContact.firstName = ""
        updatedContact.lastName = ""
      }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const putData = {
            id: formData.id,
            name: `${formData.firstName} ${formData.lastName}`,
            address: {
              street: formData.street,
              city: formData.city,
            },
          }
      
          fetch(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, {
            method: "PUT",
            body: JSON.stringify(putData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("Response from API:", json)

              handleUpdate();

              setFormData({
                firstName: "",
                lastName: "",
                street: "",
                city: "",
              })
        })
    }

    useEffect(() => {
        setFormData({ ...contactToUpdate });
    }, [contactToUpdate])
    console.log("ccccccc", contacts)

    return (
        <form onSubmit={handleSubmit}>
          <h2>Updating contact:</h2>
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

            <input type="submit" value="Update"/>
        </form>
    )
}
export default ContactUpdateForm