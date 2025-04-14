import React, {useContext} from 'react';
import {API_URL, ContactContext} from "../App.jsx";

function AddContactForm() {
    const {contacts, setContacts} = useContext(ContactContext);
    const [contact, setContact] = React.useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        email: ""
    });

    let handleChange = (e) => {
        setContact({...contact, [e.target.id]: e.target.value});
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(data => {
                setContacts([...contacts, data]);
                alert("Contact added");
            })
            .catch(error => {
                switch (error.response.status) {
                    case 400:
                        alert("Bad request");
                        break;
                    case 401:
                        alert("Unauthrized");
                        break;
                    default:
                        alert("Server error");
                }
            });
    }
    return (
        <div>
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" onChange={handleChange} value={contact.firstName}/>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" onChange={handleChange} value={contact.lastName}/>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" onChange={handleChange} value={contact.street}/>
                <label htmlFor="city">City</label>
                <input id="city" type="text" onChange={handleChange} value={contact.city}/>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange={handleChange} value={contact.email}/>
                <div>
                    <button type={"submit"}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddContactForm;
