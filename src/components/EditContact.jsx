import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../App";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { contacts, setContacts } = useContext(ContactContext);
  const contact = contacts.find(c => c.id === parseInt(id));

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://boolean-uk-api-server.fly.dev/badde00/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        street: event.target.street.value,
        city: event.target.city.value,
        gender: event.target.gender.value,
        email: event.target.email.value,
        jobTitle: event.target.jobTitle.value,
        latitude: parseFloat(event.target.latitude.value),
        longitude: parseFloat(event.target.longitude.value),
        favouriteColour: event.target.favouriteColour.value,
        profileImage: event.target.profileImage.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }
        setContacts((prevContacts) => {
          const index = prevContacts.findIndex((c) => c.id === contact.id);
          prevContacts[index] = data;
          return prevContacts;
        });
        navigate("/view/" + id);
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" defaultValue={contact.firstName} required />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" defaultValue={contact.lastName} required />

      <label htmlFor="street">Street</label>
      <input type="text" id="street" name="street" defaultValue={contact.street} required />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" defaultValue={contact.city} required />

      <label htmlFor="gender">Gender</label>
      <input type="text" id="gender" name="gender" defaultValue={contact.gender} />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" defaultValue={contact.email} />

      <label htmlFor="jobTitle">Job Title</label>
      <input type="text" id="jobTitle" name="jobTitle" defaultValue={contact.jobTitle} />

      <label htmlFor="latitude">Latitude</label>
      <input type="number" id="latitude" name="latitude" min="-90" max="90" step="any" defaultValue={contact.latitude || "0"} />

      <label htmlFor="longitude">Longitude</label>
      <input type="number" id="longitude" name="longitude" min="-180" max="180" step="any" defaultValue={contact.longitude || "0"} />

      <label htmlFor="favouriteColour">Favourite Colour</label>
      <input type="color" id="favouriteColour" name="favouriteColour" defaultValue={contact.favouriteColour || "#000000"} />

      <label htmlFor="profileImage">Profile Image</label>
      <input type="url" id="profileImage" name="profileImage" defaultValue={contact.profileImage} />


      <button type="submit">Edit</button>
    </form>
  );

}

export default EditContact;