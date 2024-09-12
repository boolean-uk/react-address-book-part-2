import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LeftMenu from "../leftMenu/LeftMenu"
import "./UpdateContact.css"

function UpdateContact (){

    const { id } = useParams();
    const [contact, setContact] = useState(null);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`)
            .then(response => response.json())
            .then(data => {
                setContact(data);
                setForm({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    street: data.street,
                    city: data.city
                })
            })
    }, [id])

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate(`/contact/${id}`))
    }

    return (
        <div className="updateContactContainer">
        <LeftMenu />
        <div className="updateContact">
            <h1>Create Contact</h1>
            <form className="updateForm" onSubmit={handleFormSubmit}>
                <p><label htmlFor="firstName">First Name:</label></p>
                <p><input type="text" name="firstName" id="firstName" value={form.firstName} onChange={handleFormChange} /></p>
                <p><label htmlFor="lastName">Last Name:</label></p>
                <p><input type="text" name="lastName" id="lastName" value={form.lastName} onChange={handleFormChange} /></p>
                <p><label htmlFor="street">Street:</label></p>
                <p><input type="text" name="street" id="street" value={form.street} onChange={handleFormChange} /></p>
                <p><label htmlFor="city">City:</label></p>
                <p><input type="text" name="city" id="city" value={form.city} onChange={handleFormChange} /></p>
                <p><button type="submit" className="btnUpdate">Update</button></p>
            </form>
        </div>
        </div>
    )


}

export default UpdateContact