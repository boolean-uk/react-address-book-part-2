import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContactForm(props) {
  const { contacts, setContacts, currContactID, setCurrContactID } = props;

  const [newContact, setNewContact] = useState({
    id: parseInt(currContactID),
    lastName: "",
    street: "",
    city: "",
  })

  const goToDashboard = useNavigate();

  console.log("contacts length", contacts.length);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "first_name") {
        setNewContact({ ...newContact, firstName: inputValue });
    }
    if (inputName === "last_name") {
      setNewContact({ ...newContact, lastName: inputValue });
    }
    if (inputName === "street") {
      setNewContact({ ...newContact, street: inputValue });
    }
    if (inputName === "city") {
      setNewContact({ ...newContact, city: inputValue });
    }
  };

  const handleCreate = () => {
    setCurrContactID(parseInt(currContactID) + 1);
    setContacts((contact) => [...contact, newContact]);
    goToDashboard("/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">First Name</label>
      <p></p>
      <input
        type="text"
        id="first_name"
        name="first_name"
        onChange={handleChange}
      />
      <p></p>

      <label htmlFor="last_name">Last Name</label>
      <p></p>
      <input
        type="text"
        id="last_name"
        name="last_name"
        onChange={handleChange}
      />
      <p></p>

      <label htmlFor="street">Street</label>
      <p></p>
      <input type="text" id="street" name="street" onChange={handleChange} />
      <p></p>

      <label htmlFor="city">City</label>
      <p></p>
      <input type="text" id="city" name="city" onChange={handleChange} />
      <p></p>

      <button type="submit" onClick={handleCreate}>
        Create
      </button>
    </form>
  );
}

export default AddContactForm