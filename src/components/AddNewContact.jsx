import "./addNewContact.css";
import { useState } from "react";

function AddNewContact(props) {
  const { form, setForm } = props;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Create Contact</h1>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Street
          <input
            type="text"
            value={form.street}
            onChange={(e) => setForm({ ...form, street: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          City:
          <input
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </label>
      </div>
      <button>Create</button>
    </form>
  );
}

export default AddNewContact;
