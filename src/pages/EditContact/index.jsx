import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../../App";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { api, contacts, setContacts } = useContext(ApiContext);

  const existing = contacts.find((p) => String(p.id) === id);

  const [formData, setFormData] = useState(
    existing || { firstName: "", lastName: "", street: "", city: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();

      setContacts((prev) =>
        prev.map((p) => (String(p.id) === id ? { ...p, ...updated } : p))
      );

      navigate(`/contacts/${id}`);
    } catch (err) {
      alert("Could not update contact.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Contact</h2>

      <label>
        First Name:
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Street:
        <input name="street" value={formData.street} onChange={handleChange} />
      </label>
      <br />

      <label>
        City:
        <input name="city" value={formData.city} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Save</button>
    </form>
  );
}

export default EditContact;
