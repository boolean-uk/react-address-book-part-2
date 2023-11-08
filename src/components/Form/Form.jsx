import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initial_state =  {
    firstName: "",
    lastName: "",
    street:"",
    city: "",
}

function Form (props) {

    const { contact, contacts, setContacts, setReloadingNecessary } = props;

    const [form, setForm] = useState(initial_state)

    const navigate = useNavigate();

    function handleFormSubmit (e) {
        e.preventDefault();

        const username = "AllyDouillette"
        const baseURL= `https://boolean-api-server.fly.dev/${username}`
        const endpoint = `/contact/`

        const data = {
            firstName:  e.target[0].value,
            lastName: e.target[1].value,
            street: e.target[2].value,
            city: e.target[3].value,
        }

        const options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        }

        fetch(baseURL + endpoint, options)
            .then(res => res.json())
            .then(data => console.log("new contact added", data))
            .then(setReloadingNecessary(true))
            .then(navigate ("/"))
    }


    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className = "form-element">
                <label htmlFor = "First Name">First Name:</label>
                <input 
                name = "firstName"
                type = "text" 
                placeholder = "First Name" 
                value={form.firstName}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Last Name">Last Name:</label>
                <input 
                name = "lastName"
                type = "text" 
                placeholder = "Last Name"
                value={form.lastName} 
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Street">Street:</label>
                <input 
                name = "street"
                type = "text" 
                placeholder = "Street" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "City">City:</label>
                <input
                name = "city" 
                type = "text" 
                placeholder = "City"
                value={form.city} 
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <button className = "submit-button" type = "submit">Add Contact</button>
        </form>
    )
}

export default Form;