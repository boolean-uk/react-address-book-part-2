import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactUpdate = ({ contacts, setContacts }) => {
    const { id } = useParams();

    const [contact, setContact] = useState(
        contacts.find((p) => p.id === parseInt(id))
    );

    const nav = useNavigate();

    const ApiPutRequest = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            contact.firstName.trim === "" ||
            contact.lastName.trim === "" ||
            contact.street.trim === "" ||
            contact.city.trim === ""
        ) {
            console.log("Form was not filled correctly!");
            return;
        }

        const response = await fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/contact/" + id,
            ApiPutRequest
        );
        const updatedContact = await response.json();

        const indexToEdit = contacts.findIndex((c) => c.id === parseInt(id));
        const updatedContacts = [...contacts];
        updatedContacts[indexToEdit] = updatedContact;
        setContacts([...updatedContacts]);
        nav("/detail/" + id);
    };

    return (
        <article>
            <h2>Update Contact</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    firstName: e.target.value,
                                })
                            }
                            value={contact.firstName}
                        />
                    </li>
                    <li>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    lastName: e.target.value,
                                })
                            }
                            value={contact.lastName}
                        />
                    </li>
                    <li>
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    street: e.target.value,
                                })
                            }
                            value={contact.street}
                        />
                    </li>
                    <li>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            onChange={(e) =>
                                setContact({ ...contact, city: e.target.value })
                            }
                            value={contact.city}
                        />
                    </li>
                </ul>
                <button type="submit">Update</button>
            </form>
        </article>
    );
};

export default ContactUpdate;
