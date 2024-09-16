import { useState } from "react"
import { useNavigate } from "react-router-dom"

const inputData = {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
}

export default function Form({setShouldGetData}) {
    const [form, setForm] = useState(inputData)

    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target

        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(form)
    }

    fetch('https://boolean-api-server.fly.dev/ilham-saleh/contact', options)
    .then((res) => res.json())
    .then(() => setShouldGetData(true));
    // .then(() => getContactsData());


    navigate('/contact-lists')

    }

    return (
       <div className="form-container">
        <h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
                First Name
            </label>
            <br />
            <input type="text" name="firstName" value={form.firstName} onChange={(event) => {handleChange(event)}} required/>
            <br />
            <label htmlFor="lastName">
                Last Name
            </label>
            <br />
            <input type="text" name="lastName" value={form.lastName} onChange={(event) => {handleChange(event)}} required/>
            <br />
            <label htmlFor="street">
                Street
            </label>
            <br />
            <input type="text" name="street" value={form.street} onChange={(event) => {handleChange(event)}} required/>
            <br />
            <label htmlFor="city">
                City
            </label>
            <br />
            <input type="text" name="city" value={form.city} onChange={(event) => {handleChange(event)}} required/>
            <br />
            <button type="submit">Create</button>
        </form>
       </div>
    )
}