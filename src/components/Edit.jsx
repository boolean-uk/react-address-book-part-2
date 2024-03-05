import { useState} from "react";
import { useParams } from "react-router-dom";

export const Edit = ({ editContact, contacts }) => {
    const { id } = useParams();

    const contact = contacts.find((contact) => contact.id === parseInt(id));

    const [form, setForm] = useState({
        id: parseInt(id),
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city,
    });

    const headers = ["First Name", "Last Name", "Street", "City"];

    const handleSubmit = (e) => {
        e.preventDefault();
        editContact(form);
    }

    return (
        <form>
            <h2>Edit Contact</h2>
            {Object.keys(form).filter(key => key !== "id").map((key, index) => (
                <div className="form-item" key={key}>
                    <h3>{headers[index]}</h3>
                    <input
                        id={key}
                        name={key}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}
