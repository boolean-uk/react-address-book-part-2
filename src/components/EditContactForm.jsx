import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChromePicker } from "react-color";

function EditContactForm(props) {
  const [contact, setContact] = useState(props.contact);
  const [valid, setValid] = useState(false);
  const { submit } = props;
  const navigate = useNavigate();
  function onChange(event) {
    if (event.target) {
      const name = event.target.name;
      const value = event.target.value;
      if (name === "longitude" || name === "latitude") {
        setContact({ ...contact, [name]: parseFloat(value) });
      } else {
        setContact({ ...contact, [name]: value });
      }
    } else {
      setContact({ ...contact, favouriteColour: event.hex });
    }
  }
  function onSubmit(event) {
    event.preventDefault();
    submit(contact);
    navigate(`/contacts/${contact.id}`);
  }
  useEffect(() => {
    if (
      contact.firstName &&
      contact.lastName &&
      contact.street &&
      contact.city
    ) {
      setValid(true);
    }
  }, [contact]);
  return (
    <div>
     <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={onChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={onChange}
          required
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          value={contact.street}
          onChange={onChange}
          required
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={contact.city}
          onChange={onChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={onChange}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          name="gender"
          value={contact.gender}
          onChange={onChange}
        />
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={onChange}
        />
        <label htmlFor="latitude">Latitude</label>
        <input
          type="number"
          name="latitude"
          value={contact.latitude}
          onChange={onChange}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="number"
          name="longitude"
          value={contact.longitude}
          onChange={onChange}
        />
        <label htmlFor="colour">Favourite Colour</label>
        <ChromePicker
          name={"colour"}
          color={contact.favouriteColour}
          onChangeComplete={onChange}
        />
        <input type="submit" onClick={onSubmit} disabled={!valid} />
      </form>
    </div>
  );
}
export default EditContactForm;
