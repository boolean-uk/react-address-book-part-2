import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";

function EditContact() {
  const { contacts } = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (contacts && id) {
      const matchingPerson = contacts.find((person) => {
        return Number(person.id) === Number(id);
      });
      setPerson(matchingPerson);
      console.log(matchingPerson);
    }
  }, [contacts, id]);

  if (!person) return <p>Loading...</p>;

  const handleEdit = (event) => {
    event.preventDefault();
    console.log(person);

    fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(person),
    });

    navigate(`/contacts/view/${id}`);
  };

  const handleChange = (event) => {
    event.preventDefault();

    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "firstName") {
      setPerson({ ...person, firstName: inputValue });
    }
    if (inputName === "lastName") {
      setPerson({ ...person, lastName: inputValue });
    }
    if (inputName === "city") {
      setPerson({ ...person, city: inputValue });
    }
    if (inputName === "street") {
      setPerson({ ...person, street: inputValue });
    }
    if (inputName === "gender") {
      setPerson({ ...person, gender: inputValue });
    }
    if (inputName === "email") {
      setPerson({ ...person, email: inputValue });
    }
    if (inputName === "jobTitle") {
      setPerson({ ...person, jobTitle: inputValue });
    }
    if (inputName === "latitude") {
      setPerson({ ...person, latitude: parseInt(inputValue) });
    }
    if (inputName === "longitude") {
      setPerson({ ...person, longitude: parseInt(inputValue) });
    }
    if (inputName === "favouriteColour") {
      setPerson({ ...person, favouriteColour: inputValue });
    }
  };

  return (
    <>
      <form onSubmit={handleEdit}>
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={person.city}
          onChange={handleChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={person.street}
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={person.gender}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">Job title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={person.jobTitle}
          onChange={handleChange}
        />

        <label htmlFor="latitude">Latitude</label>
        <input
          type="number"
          id="latitude"
          name="latitude"
          value={person.latitude}
          onChange={handleChange}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          value={person.longitude}
          onChange={handleChange}
        />
        <label htmlFor="favouriteColour">Favourite Colour</label>
        <input
          type="text"
          id="favouriteColour"
          name="favouriteColour"
          value={person.favouriteColour}
          onChange={handleChange}
        />

        <button type="submit">Submit changes</button>
      </form>
    </>
  );
}

export default EditContact;
