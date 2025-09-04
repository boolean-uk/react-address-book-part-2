
import '../App.css';
import { useState, useEffect } from 'react';

function AddContact({ onAdd, initialValues, buttonText = "Add Contact" }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    street: '',
    city: '',
  });

  useEffect(() => {
    if (initialValues) {
      setForm(initialValues);
    }
  }, [initialValues]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    if (!initialValues) {
      setForm({ firstName: '', lastName: '', email: '', jobTitle: '', street: '', city: '' });
    }
  }

  return (
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <h2>{buttonText}</h2>
      <input className="add-contact-input" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
      <input className="add-contact-input" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      <input className="add-contact-input" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input className="add-contact-input" name="jobTitle" placeholder="Job Title" value={form.jobTitle} onChange={handleChange} />
      <input className="add-contact-input" name="street" placeholder="Street" value={form.street} onChange={handleChange} />
      <input className="add-contact-input" name="city" placeholder="City" value={form.city} onChange={handleChange} />
      <button className="add-contact-btn" type="submit">{buttonText}</button>
    </form>
  );
}

export default AddContact;
