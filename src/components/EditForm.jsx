import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditForm({ contacts, setContacts }) {
    const { id } = useParams()
    const [contact, setContact] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (contacts && id) {
            const theContact = contacts.find((contact) => parseInt(contact.id) === parseInt(id))
            setContact(theContact)
        }
    }, [])

    if (!contact) return <p>Contact not found</p>

    function handleSubmit(event) {
      event.preventDefault();

      fetch(`https://boolean-api-server.fly.dev/maha897/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      })
        .then((response) => response.json())
        .then((updatedContact) => {
            const updatedContacts = contacts.map(c => c.id === updatedContact.id ? updatedContact : c)
          setContacts(updatedContacts);
          navigate(`/contact/${id}`);
        })
        .catch((error) => console.error("Error updating contact: ", error));
    }


    function handleChange(event) {
      const { name, value } = event.target;
      setContact({ ...contact, [name]: value });
    }

    return (
      <div className="edit-form-div">
        <h2 className="form-heading">
          {contact.firstName} {contact.lastName}
        </h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="firstName">
            First name:{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="new-fname-input"
            name="firstName"
            onChange={handleChange}
            value={contact.firstName}
          />
          <br /> <br />
          <label className="form-label" htmlFor="lastName">
            Last name:{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="new-lname-input"
            name="lastName"
            onChange={handleChange}
            value={contact.lastName}
          />
          <br /> <br />
          <label className="form-label" htmlFor="street">
            Street:{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="new-street-input"
            name="street"
            onChange={handleChange}
            value={contact.street}
          />
          <br /> <br />
          <label className="form-label" htmlFor="city">
            City:{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="new-city-input"
            name="city"
            onChange={handleChange}
            value={contact.city}
          />
          <br /> <br />
          <button className="submit-button" type="submit">Apply changes</button>
        </form>
      </div>
    );
}

export default EditForm