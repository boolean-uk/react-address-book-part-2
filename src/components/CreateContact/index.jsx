import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateContact from "../ContactList/UpdateContact";
const initialContactData = {
  profileImage:
    "https://www.gravatar.com/avatar/Jaron57@hotmail.com?s=120&d=identicon",
  id: 0,
};
function CreateContact(props) {
  const [newContact, setNewContact] = useState(initialContactData);
  const navigate = useNavigate();
  const { contacts, setContacts } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://boolean-api-server.fly.dev/knutsr0501/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    //Set new id
    const newId = contacts[contacts.length - 1].id + 1;
    newContact.id = newId;

    setContacts([...contacts, newContact]);
    console.log(newContact);
    navigate("/contacts");
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "first") {
      setNewContact({ ...newContact, firstName: event.target.value });
    }
    if (inputName === "last") {
      setNewContact({ ...newContact, lastName: event.target.value });
    }
    if (inputName === "street") {
      setNewContact({ ...newContact, street: event.target.value });
    }
    if (inputName === "city") {
      setNewContact({ ...newContact, city: event.target.value });
    }
    if (inputName === "gender") {
      setNewContact({ ...newContact, gender: event.target.value });
    }
    if (inputName === "jobTitle") {
      setNewContact({ ...newContact, jobTitle: event.target.value });
    }
    if (inputName === "email") {
      setNewContact({ ...newContact, email: event.target.value });
    }
    if (inputName === "longitude") {
      setNewContact({ ...newContact, longitude: Number(event.target.value) });
    }
    if (inputName === "latitude") {
      setNewContact({ ...newContact, latitude: Number(event.target.value) });
    }
    if (inputName === "favouriteColour") {
      setNewContact({ ...newContact, favouriteColour: event.target.value });
      console.log(newContact);
    }
  };
  return (
    <div>
      <form className="form">
        <h3>Write the first name of the contact</h3>
        <input
          type="text"
          name="first"
          onChange={handleChange}
          value={newContact.firstName}
        />

        <h3>Write the last name of the contact</h3>
        <input
          type="text"
          name="last"
          onChange={handleChange}
          value={newContact.lastName}
        />

        <h3>Write the street of the contact</h3>
        <input
          type="text"
          name="street"
          onChange={handleChange}
          value={newContact.street}
        />

        <h3>Write the city of the contact</h3>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={newContact.city}
        />

        <h3>Write the gender of the contact</h3>
        <input
          type="text"
          name="gender"
          onChange={handleChange}
          value={newContact.gender}
        />
        <h3>Write the job title of the contact</h3>
        <input
          type="text"
          name="jobTitle"
          onChange={handleChange}
          value={newContact.jobTitle}
        />

        <h3>Write the email of the contact</h3>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={newContact.email}
        />

        <h3>Write the favourite colour of the contact</h3>
        <input
          type="text"
          name="favouriteColour"
          onChange={handleChange}
          value={newContact.favouriteColour}
        />

        <h3>Write the longitude of the contact</h3>
        <input
          type="number"
          name="longitude"
          onChange={handleChange}
          value={newContact.longitude}
        />

        <h3>Write the latitude of the contact</h3>
        <input
          type="number"
          name="latitude"
          onChange={handleChange}
          value={newContact.latitude}
        />
        <button onClick={handleSubmit}>Create user</button>
      </form>
    </div>
  );
}
export default CreateContact;
