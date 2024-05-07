import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const textInputFields = [
  "firstName",
  "lastName",
  "gender",
  "jobTitle",
  "city",
  "street",
  "latitude",
  "longitude",
];

export default function ProfileView(props) {
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

  const deleteContact = () => {
    fetch(
      "https://boolean-api-server.fly.dev/pkekkonen/contact/" + contact.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setContacts(contacts.filter((person) => person.id !== contact.id));
      });

    navigate("/dashboard");
  };

  return (
    <article>
      <h2>Profile</h2>
      <ul>
        {textInputFields.map((textInputField, index) => (
          <li key={index} className="field">
            <label className="valueLabel" htmlFor={textInputField}>
              {textInputField}:
            </label>
            <p className="value" name={textInputField}>
              {contact[textInputField]}
            </p>
          </li>
        ))}
        <li className="field">
          <label className="valueLabel" htmlFor="favouriteColour">
            Favourite colour:
            <p
              className="value"
              name="favouriteColour"
              style={{ color: contact.favouriteColour }}
            >
              ■
            </p>
          </label>
        </li>
        <li>
          {contact.profileImage !== "none" && <img className="profileImage" src={contact.profileImage} />}
        </li>
        <li>
          <iframe
            width="100%"
            height="250"
            src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}
          ></iframe>
        </li>
      </ul>
      <button onClick={deleteContact}>Delete contact</button>
      <button onClick={() => navigate(`/update/${contact.id}`)}>
        Update contact
      </button>
    </article>
  );
}
