import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditContact () {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
      });

    const contactId = useParams().id

    useEffect(() => {
        const getData = async () => {
          const data = await fetch(`https://boolean-api-server.fly.dev/MrStashy/contact/${contactId}`);
          const json = await data.json();
          setFormData(json);
        };
        getData();
      }, [contactId]);



    const handleSubmit = async (e) => {
        e.preventDefault()
        const update = await fetch (`https://boolean-api-server.fly.dev/MrStashy/contact/${contactId}`, {
            method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        if (update.ok) {
            console.log('updated successfully')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit} className="create-contact-form">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            value={formData.firstName}
            name="firstName"
            type="textbox"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            value={formData.lastName}
            name="lastName"
            type="textbox"
          />
          <label htmlFor="street">Street</label>
          <input
            onChange={handleChange}
            value={formData.street}
            name="street"
            type="textbox"
          />
          <label htmlFor="city">City</label>
          <input
            onChange={handleChange}
            value={formData.city}
            name="city"
            type="textbox"
          />
          <button type="submit">Update</button>
        </form>
      </>
    )
}