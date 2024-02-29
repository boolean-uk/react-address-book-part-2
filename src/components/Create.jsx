import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const Create = ({addContact}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
    navigate('/');
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