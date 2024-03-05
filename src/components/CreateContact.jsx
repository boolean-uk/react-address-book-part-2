import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  street: "",
  city: "",
  latitude: "",
  longitude: "",
  favouriteColour: "#000000",
  profileImage: "",
};

const textInputFields = [
  "firstName",
  "lastName",
  "gender",
  "jobTitle",
  "city",
  "street",
  "latitude",
  "longitude",
  "profileImage",
];

export default function CreateContact(props) {
  const [contact, setContact] = useState(initState);
  const navigate = useNavigate();
  const { contacts, setContacts } = props;

  function handleChange(event) {
    if (["latitude", "longitude"].includes(event.target.name)) {
      setContact({
        ...contact,
        [event.target.name]: Number(event.target.value),
      });
      return;
    }
    setContact({ ...contact, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contact);

    fetch("https://boolean-api-server.fly.dev/pkekkonen/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setContacts([...contacts, responseData]);
      });

    navigate("/dashboard");
  };

  return (
    <>
    <h1>Create contact</h1>
    <form onSubmit={handleSubmit}>
      <ul>
        {textInputFields.map((textInputField, index) => (
          <li key={index}>
            <label htmlFor={textInputField}> {textInputField}: </label>
            <input
              type="text"
              id={textInputField}
              name={textInputField}
              onChange={handleChange}
              value={contact[textInputField]}
            />
          </li>
        ))}
        <li>
          <label htmlFor="email"> E-mail: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={contact.email}
          />
        </li>
        <li>
          <label htmlFor="favouriteColour">Favourite colour:</label>
          <input
            type="color"
            id="favouriteColour"
            name="favouriteColour"
            value={contact.favouriteColour}
            onChange={handleChange}
          ></input>
        </li>
        <button type="submit">Create</button>
      </ul>
    </form>
    </>
  );
}
