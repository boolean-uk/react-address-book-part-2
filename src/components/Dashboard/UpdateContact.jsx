import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react"
import { ContactContext } from "../../App";


function UpdateContact() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState([]);
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const { contacts, fetchData } = useContext(ContactContext);

    useEffect(() => {
        if (contacts && id) {
          setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
          if (!contact) return;
          setFormData({
            firstName: contact.firstName,
            lastName: contact.lastName,
            street: contact.street,
            city: contact.city,
          });
        }
      }, [contacts, id, contact]);
    
    const url = "https://boolean-uk-api-server.fly.dev/heskinstad/contact/" + id;

    const putContact = () => {
        fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then(() => fetchData())
        .catch((err) => console.log(err))
    }

    const deleteContact = () => {
        fetch(url, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then(() => fetchData())
        .catch((err) => console.log(err))
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        putContact();
        navigate(`/contacts/${id}`);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        deleteContact();
        navigate(`/`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Update Contact</h2>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    />
                </label>
                <br />
                <label>
                    Street:
                    <input
                    type="text"
                    name="street"
                    onChange={handleChange}
                    value={formData.street}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    />
                </label>
                <br />
                <input
                    type="submit"
                    value="Update"
                />
            </form>
            <button onClick={handleDelete}>Delete Contact</button>
        </>
    );
}

export default UpdateContact;