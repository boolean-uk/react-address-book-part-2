import { useNavigate } from "react-router-dom";
import "./addNewContact.css";
import { useState } from "react";

function AddNewContact(props) {
  const navigate = useNavigate();

  const { formData, setFormData, postContact } = props;

  const submitForm = (e) => {
    e.preventDefault();
    postContact();
    //console.log(formData);
  };

  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
        navigate("/");
      }}
    >
      <h1>Create Contact</h1>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
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
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Street
          <input
            type="text"
            value={formData.street}
            onChange={(e) =>
              setFormData({ ...formData, street: e.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label>
          City:
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </label>
      </div>

      <button>Create</button>
    </form>
  );
}

export default AddNewContact;
