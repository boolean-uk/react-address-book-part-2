import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fullURL } from "./ContactList"


export default function AddContactComponent(props) {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        city: "",
        street: ""
    })

    const updateInput = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const response = await fetch(fullURL + "/contact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
        navigate('/')
    }

    return (
        <form className="inputform">
            <header>
                <h1>
                    Create Contact
                </h1>
            </header>
            <ul className="textboxes">
                <li>
                    <div>
                        First Name:
                    </div>
                    <input name='firstName' value={inputs.firstName} onChange={updateInput}>
                    </input>
                </li>
                <li>
                    <div>
                        Last Name:
                    </div>
                    <input name='lastName' value={inputs.lastName} onChange={updateInput}>
                    </input>
                </li>
                <li>
                    <div>
                        City:
                    </div>
                    <input name='city' value={inputs.city} onChange={updateInput}>
                    </input>
                </li>
                <li>
                    <div>
                        Street:
                    </div>
                    <input name='street' value={inputs.street} onChange={updateInput}>
                    </input>
                </li>
            </ul>
            <input className='submitForm' type='submit' value='Create' onClick={submitForm} />
        </form>
    )
}