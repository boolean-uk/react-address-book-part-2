import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../App";

function AddContact() {
  const navigate = useNavigate();
  const { api, setContacts } = useContext(ApiContext);
  const url = `${api}/contact`;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const created = await res.json();

      const newContact = created?.contact ?? created;

      setContacts((prev) => [newContact, ...prev]);

      navigate("/");
    } catch (err) {
      setError("Failed to add contact. " + (err?.message ?? ""));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>
        First Name:
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
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

      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default AddContact;
