import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function UpdateContact(props) {
  const [updatedContact, setUpdatedContact] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const { contacts, setContacts } = props;

  useEffect(() => {
    if (contacts && id) {
      setUpdatedContact(contacts.find((person) => person.id === Number(id)));
    }
  }, [contacts, id]);

  if (!updatedContact) return <p>Loading...</p>;

  function handleChange(event) {
    setUpdatedContact({ ...updatedContact, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    fetch("https://boolean-api-server.fly.dev/pkekkonen/contact/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const updatedContacts = contacts.filter(
          (person) => person.id !== Number(id)
        );

        setContacts([...updatedContacts, responseData]);
      });

    navigate("/view/"+id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName"> First name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(event) => handleChange(event)}
        value={updatedContact.firstName}
      />
      <label htmlFor="lastName"> Last name: </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={(event) => handleChange(event)}
        value={updatedContact.lastName}
      />
      <label htmlFor="street"> Street: </label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={(event) => handleChange(event)}
        value={updatedContact.street}
      />
      <label htmlFor="city"> City: </label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={(event) => handleChange(event)}
        value={updatedContact.city}
      />
      <button type="submit">Update</button>
    </form>
  );
}
