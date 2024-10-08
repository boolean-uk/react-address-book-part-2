import {useNavigate} from "react-router-dom"
import {useState} from 'react'

function Form({contact, postContact, setContact}){
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        contact.firstName = firstName
        contact.lastName = lastName
        contact.city = city
        contact.street = street
        postContact(contact)
        navigate("/")
    }

    function handleChange(event){
        const inputName = event.target.name
        const inputValue = event.target.value   
        switch (inputName) {
            case 'firstName':
                setFirstName(inputValue);
                break;
            case 'lastName':
                setLastName(inputValue);
                break;
            case 'city':
                setCity(inputValue);
                break;
            case 'street':
                setStreet(inputValue);
                break;
            default:
                break;
        }
        setContact({ ...contact, [inputName]: inputValue });
    }

    return(
        <main> 
            <h2>New contact</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>First name </label>
                        <input 
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                        ></input>
                    </li>
                    <li>
                        <label>Last name </label>
                        <input 
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                        ></input>
                    </li>
                    <li>
                        <label>City </label>
                        <input 
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={handleChange}
                        ></input>
                    </li>
                    <li>
                        <label>Street </label>
                        <input 
                            type="text"
                            id="street"
                            name="street"
                            value={street}
                            onChange={handleChange}
                        ></input>
                    </li>
                </ul>
                <button type="submit">Add contact</button>
            </form>
        </main>
    )
}

export default Form