import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initial_state =  {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
    street:"",
    city: "",
}

function Form (props) {

    const { setReloadingNecessary } = props;

    const [form, setForm] = useState(initial_state)

    const navigate = useNavigate();

    function handleFormSubmit (e) {
        e.preventDefault();
       
        const username = "loza01"
        const baseURL= `https://boolean-api-server.fly.dev/${username}` // https://boolean-api-server.fly.dev/loza01/contact/ 
        const endpoint = `/contact/`

        const data = {
            firstName:  e.target[0].value,
            lastName: e.target[1].value,
            gender:  e.target[2].value,
            jobTitle:  e.target[3].value,
            street: e.target[4].value,
            city: e.target[5].value,
            latitude: e.target[6].value,
            longitude: e.target[7].value  
        }

        const options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        }

        fetch(baseURL + endpoint, options)
            .then(res => res.json())
            .catch(error =>  console.log(error))
            .then(setReloadingNecessary(true))
            .then(navigate ("/"))
    }


    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className = "form-element">
                <label htmlFor = "First Name"></label>
                <input 
                name = "firstName"
                type = "text" 
                placeholder = "First Name" 
                value={form.firstName}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Last Name"></label>
                <input 
                name = "lastName"
                type = "text" 
                placeholder = "Last Name"
                value={form.lastName} 
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "gender"></label>
                <input 
                name = "gender"
                type = "text" 
                placeholder = "gender" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "email"></label>
                <input 
                name = "email"
                type = "text" 
                placeholder = "email" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "jobTitle"></label>
                <input 
                name = "jobTitle"
                type = "text" 
                placeholder = "jobTitle" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "Street"></label>
                <input 
                name = "street"
                type = "text" 
                placeholder = "Street" 
                value={form.street}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                />
            </div>
            <div className = "form-element">
                <label htmlFor = "City"></label>
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