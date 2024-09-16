import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialContactInfo = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

function CreateContact({ setContacts, fetchContacts }) {
  const [contactInfo, setContactInfo] = useState(initialContactInfo);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://boolean-api-server.fly.dev/jacobchenjensen/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContacts((prevContacts) => [...prevContacts, data]);
        fetchContacts();
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Error adding contact:", error);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: "20px",
      }}
    >
      <label htmlFor="First Name">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(e) =>
          setContactInfo((prevContactInfo) => ({
            ...prevContactInfo,
            firstName: e.target.value,
          }))
        }
        value={contactInfo.firstName}
        required
      />
      <br />
      <label htmlFor="Last Name">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={(e) =>
          setContactInfo((prevContactInfo) => ({
            ...prevContactInfo,
            lastName: e.target.value,
          }))
        }
        value={contactInfo.lastName}
        required
      />
      <br />
      <label htmlFor="Street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={(e) =>
          setContactInfo((prevContactInfo) => ({
            ...prevContactInfo,
            street: e.target.value,
          }))
        }
        value={contactInfo.street}
        required
      />
      <br />
      <label htmlFor="City">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={(e) =>
          setContactInfo((prevContactInfo) => ({
            ...prevContactInfo,
            city: e.target.value,
          }))
        }
        value={contactInfo.city}
        required
      />
      <br />
      <button type="submit">Create Contact</button>
    </form>
  );
}
export default CreateContact;
