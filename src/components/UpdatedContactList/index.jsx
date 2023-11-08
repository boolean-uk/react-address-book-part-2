import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatedContactList({ theContactData, theUrl, setFetchData }) {
  const [theUpdatedPerson, setTheUpdatedPerson] = useState(null);
  const navigator = useNavigate();

  const [theUpdatedFirstName, setTheUpdatedFirstName] = useState("");
  const [theUpdatedLastName, setTheUpdatedLastName] = useState("");
  const [theUpdatedStreet, setTheUpdatedStreet] = useState("");
  const [theUpdatedCity, setTheUpdatedCity] = useState("");

  const updateContactDetails = {
    firstName: theUpdatedFirstName,
    lastName: theUpdatedLastName,
    street: theUpdatedStreet,
    city: theUpdatedCity,
  };
  const { id } = useParams();

  useEffect(() => {
    if (id && theContactData) {
      setTheUpdatedPerson(
        theContactData.find((person) => Number(person.id) === Number(id))
      );
    }
  }, [id, theContactData]);

  function UpdatedContactList() {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateContactDetails),
    };
    fetch(`${theUrl}/${theUpdatedPerson.id}`, options)
      .then((response) => response.json())
      .then(() => setFetchData(true));
  }

  function theHandleUpdate(event) {
    event.preventDefault();
    UpdatedContactList();
    navigator(-1);
  }

  return (
    <section>
      <h2>Update Contact List</h2>

      <form className="update-contact-form" onSubmit={theHandleUpdate}>
        <label htmlFor="first-name">
          First Name:
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter your First Name"
            onChange={(e) => setTheUpdatedFirstName(e.target.value)}
            value={theUpdatedFirstName}
            required
          />
        </label>
        <label htmlFor="last-name">
          Last name:
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter your Last Name"
            onChange={(e) => setTheUpdatedLastName(e.target.value)}
            value={theUpdatedLastName}
            required
          />
        </label>
        <label htmlFor="street">
          Street:
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter your Street Name"
            onChange={(e) => setTheUpdatedStreet(e.target.value)}
            value={theUpdatedStreet}
            required
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your City"
            onChange={(e) => setTheUpdatedCity(e.target.value)}
            value={theUpdatedCity}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </section>
  );
}

export default UpdatedContactList;
