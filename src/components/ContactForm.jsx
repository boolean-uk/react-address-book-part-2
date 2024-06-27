import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ContactForm(props) {
  const { createContact, updateContact } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  let { state } = useLocation();
  let contact = {};
  useEffect(() => {
    if (state != null && state.contact != null) {
      setIsEdit(true);
      setFirstName(state.contact.firstName);
      setLastName(state.contact.lastName);
      setCity(state.contact.city);
      setStreet(state.contact.street);
      setEmail(state.contact.email);
    }
    console.log(contact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function handleSubmit(event) {
    event.preventDefault();
    if (isEdit) {
      let updatedContact = {
        ...state.contact,
        firstName: firstName,
        lastName: lastName,
        email: email,
        city: city,
        street: street,
      };
      updateContact(updatedContact);
      navigate(`/contacts/${updatedContact.id}/view`, {
        state: { contact: updatedContact },
      });
    } else {
      createContact({
        firstName: firstName,
        lastName: lastName,
        email: email,
        city: city,
        street: street,
      });
      navigate("/contacts");
    }
  }

  return (
    <>
      <div className="form-area">
        <h2>Create New Contact</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            First Name :
            <input
              type="text"
              id="first_name"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name :
            <input
              type="text"
              id="last_name"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last Name"
              required
            />
          </label>
          <label htmlFor="email">
            Email Address :
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="city">
            City :
            <input
              type="text"
              id="city"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              required
            />
          </label>
          <label htmlFor="street">
            Street :
            <input
              type="text"
              id="street"
              name="street"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              placeholder="Street"
              required
            />
          </label>
          <br />
          <button type="submit" className="btn-save">
            SAVE
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
