import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from '../App';

export default function EditForm(){
    const { url, contacts, setContacts } = useContext(ContactContext)
    const {id} = useParams()

    const contact = contacts.find(c => c.id.toString() === id.toString())

    const [newContact, setNewContact] = useState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city
    })
    const updateUrl = url+"/"+contact.id

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch(updateUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact)
        });
        const res = await response.json();
        console.log(res);
        
        //Shoudl just fetch again but doesnt work?
        setContacts(contacts.map(c => c.id === res.id ? res : c));

        navigate(`/contact/${contact.id}`)}

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
            <button type="submit"> Edit Contact</button>
        </form>
    )
}