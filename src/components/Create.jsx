import { useState } from "react";

export const Create = ({addContact}) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
  }

  return (
    <form>
      <h2>Create Contact</h2>
      {Object.keys(form).map((key) => (
        <div className="form-item" key={key}>
          <h3>{key}</h3>
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