import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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

export default function UpdateContact(props) {
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const { contacts, setContacts } = props;

  useEffect(() => {
    if (contacts && id) {
      setContact(contacts.find((person) => person.id === Number(id)));
    }
  }, [contacts, id]);

  if (!contact) return <p>Loading...</p>;

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
    fetch("https://boolean-api-server.fly.dev/pkekkonen/contact/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const updatedContacts = contacts.map(
          (person) => person.id === Number(id) ? responseData: person
        );

        setContacts(updatedContacts);
      });

    navigate("/view/" + id);
  };

  return (
    <>
      <h1>Update contact</h1>
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
          <button type="submit">Update</button>
        </ul>
      </form>
    </>
  );
}
