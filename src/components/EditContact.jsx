import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fullURL } from "./API-Helper";
import './CreateEdit.css'

export default function EditContact(props) {
    
    const navigate = useNavigate()
    const { id } = useParams()
    const { contacts, setContacts } = props
    const contact = contacts.find(d => d.id === id)

    if(!contacts) return (<p>loading...</p>)

    const [inputs, setInputs] = useState({})

    const updateInput = (e) => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
     }
    
     const submitForm = async (e) => {
        e.preventDefault()
        const response = await fetch(`${fullURL}/contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })

        fetch(`${fullURL}/contact`)
            .then(response => response.json())
            .then((data) => setContacts(data.results))
            .then(console.log(contacts))
            .catch((error) => {
                console.error("Error fetching data:", error)
            })

        navigate(`/view/${id}`)
    }

     return (
        <form className="editform">
            <header>
                <h1>
                    Edit Contact
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
            <input className='submitForm' type='submit' value='Edit' onClick={submitForm} />
        </form>
    )
}