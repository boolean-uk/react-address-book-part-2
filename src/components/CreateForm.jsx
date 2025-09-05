import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from '../App';

export default function CreateForm(){
    const [newContact, setNewContact] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })
    const { url, contacts, setContacts } = useContext(ContactContext)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact)
        });
        const res = await response.json();
        console.log(res);
        
        // Should probably rather update contacts by fetching again, but I wasn't able to do it so this is an temporary solution
        setContacts([...contacts,  res])
        navigate("/");
        }

    const handleChange = event => {
        const {name, value, type} = event.target;
        setNewContact({...newContact, [name]: value})
        console.log(newContact)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name <br/></label>
            <input 
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={newContact.firstName}
            />
            <br/>
            <label htmlFor="lastName">Last Name <br/></label>
            <input 
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={newContact.lastName}
            />
            <br/>
            <label htmlFor="street">Street <br/></label>
            <input 
                type="text"
                id="street"
                name="street"
                onChange={handleChange}
                value={newContact.street}
            />
            <br/>
            <label htmlFor="city">City <br/></label>
            <input 
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                value={newContact.city}
            />
            <br/>
            <button type="submit"> Create Contact</button>
        </form>
    )
}