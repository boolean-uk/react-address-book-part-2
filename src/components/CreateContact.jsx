import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../App";

export default function CreateContact() {

    const navigate = useNavigate();
    const { id } = useParams()
    const { contacts, setContacts } = useContext(ContactContext);

    const [contact, setContact ] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
    });

    const handlechange = (event) => {
        const { name, value } = event.target;
        setContact((prevData) => ({
            ...prevData, [name]: value,

        }))
    };

    const handlesubmit = (event) => {
        event.preventDefault();

        fetch('https://boolean-uk-api-server.fly.dev/alihaiderkhannn/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })

        navigate('/contacts')
        setContacts('')
    }

    return (
        <section className="form">
            <h3>Adding a new contact</h3>
            <form onSubmit={handlesubmit}>

                <label htmlFor="firstName">First Name:
                    <input type="text"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handlechange} />
                </label>

                <label htmlFor="lastName">Last Name:
                    <input type="text"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handlechange} />
                </label>

                <label htmlFor="street">Street:
                    <input type="text"
                    name="street"
                    value={contact.street}
                    onChange={handlechange} />
                </label>
                <label htmlFor="city">City:
                    <input type="text"
                    name="city"
                    value={contact.city}
                    onChange={handlechange} />
                </label>

                <button type="submit">Create</button>
                
            </form>
        </section>
    );


   

}