import "./addNewContact.css";
import { useState } from "react";

function AddNewContact(props) {
  const { formData, setFormData } = props;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Create Contact</h1>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setForm({ ...formData, firstName: e.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setForm({ ...formData, lastName: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Street
          <input
            type="text"
            value={formData.street}
            onChange={(e) => setForm({ ...formData, street: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          City:
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setForm({ ...formData, city: e.target.value })}
          />
        </label>
      </div>
      <button>Create</button>
    </form>
  );
}

export default AddNewContact;
