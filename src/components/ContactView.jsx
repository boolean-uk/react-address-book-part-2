import {useContext, useState} from 'react';
import {API_URL, ContactContext} from "../App.jsx";
import {useNavigate, useParams} from "react-router-dom";

function ContactView() {
    const {contacts, setContacts} = useContext(ContactContext);
    const {id} = useParams();
    const [contact, setContact] = useState(contacts.find(contact => contact.id === Number.parseInt(id)));

    let navigate = useNavigate();

    let handleChange = (e) => {
        setContact({...contact, [e.target.id]: e.target.value});
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/contact/${contact.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(data => {
                setContact(data);
                setContacts(contacts.map(c => c.id === data.id ? data : c))
                alert("Contact updated");
            })
            .catch(error => {
                switch (error.response.status) {
                    case 400:
                        alert("bad request");
                        break;
                    case 401:
                        alert("Unauthorized");
                        break;
                    case 404:
                        alert("Contact not Found");
                        break;
                    default:
                        alert("Server error");
                }
            });
    }

    let handleDelete = () => {
        if (!confirm("Are you sure you want to delete this contact?")) return;

        fetch(`${API_URL}/contact/${contact.id}`, {
            method: "DELETE"
        })
            .then(() => {
                setContacts(contacts.filter(c => c.id !== contact.id));
                navigate("/list");
            })
            .catch(error => {
                switch (error.response.status) {
                    case 401:
                        alert("Unauthorized");
                        break;
                    case 404:
                        alert("Contact not found");
                        break;
                    default:
                        alert("Server error");
                }
            });
    }

    return (
        <div>
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
                    <button type={"submit"}>Update</button>
                    <button onClick={handleDelete}>Delete Contact</button>
                </div>
                <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
            </form>
        </div>
    );
}

export default ContactView;
