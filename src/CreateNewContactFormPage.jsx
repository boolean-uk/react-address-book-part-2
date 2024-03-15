import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function CreateNewContactFormPage(props) {
  const { setContactInfoList, contactInfoList } = props;
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    email: "",
    favouriteColour: "",
    profileImage: "",
  });

  const navigate = useNavigate();

  function handleInputData(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "firstName") {
      setNewContact({ ...newContact, firstName: inputValue });
    }
    if (inputName === "lastName") {
      setNewContact({ ...newContact, lastName: inputValue });
    }
    if (inputName === "email") {
      setNewContact({ ...newContact, email: inputValue });
    }
    if (inputName === "street") {
      setNewContact({ ...newContact, street: inputValue });
    }
    if (inputName === "city") {
      setNewContact({ ...newContact, city: inputValue });
    }
    if (inputName === "colour") {
      setNewContact({ ...newContact, favouriteColour: inputValue });
    }
    if (inputName === "url") {
      setNewContact({ ...newContact, profileImage: inputValue });
    }
    event.preventDefault();
  }
  function handleSubmit(event) {
    console.log(newContact);

    MakePostRequestToAPI(newContact);
    event.preventDefault();
  }

  function MakePostRequestToAPI(newContact) {
    const postRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    };
    fetch(
      "https://boolean-api-server.fly.dev/MackanPalm/contact",
      postRequestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setContactInfoList([...contactInfoList, data]);
        navigate(`/contacts/${data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="formBox">
      <li className="no-list-style contact-list-box">
        <label>
          First name
          <input
            className="contact-list-box-link"
            type="text"
            name="firstName"
            required
            onChange={handleInputData}
          />
        </label>
      </li>
      <li className="no-list-style contact-list-box">
        <label>
          Last name
          <input
            className="contact-list-box-link"
            type="text"
            name="lastName"
            required
            onChange={handleInputData}
          />
        </label>
      </li>

      <li className="no-list-style contact-list-box">
        <label>
          Email
          <input
            className="contact-list-box-link"
            type="email"
            name="email"
            onChange={handleInputData}
          />
        </label>
      </li>
      <li className="no-list-style contact-list-box">
        <label>
          Street
          <input
            className="contact-list-box-link"
            type="text"
            name="street"
            onChange={handleInputData}
          />
        </label>
      </li>
      <li className="no-list-style contact-list-box">
        <label>
          City
          <input
            className="contact-list-box-link"
            type="text"
            name="city"
            onChange={handleInputData}
          />
        </label>
      </li>
      <li className="no-list-style contact-list-box">
        <label>
          favourite Colour
          <input
            className="contact-list-box-link"
            type="text"
            name="colour"
            onChange={handleInputData}
            placeholder="in hexcode"
          />
        </label>
      </li>
      <li className="no-list-style contact-list-box">
        <label>
          profile Image url
          <input
            className="contact-list-box-link"
            type="text"
            name="url"
            onChange={handleInputData}
          />
        </label>
      </li>
      <input
        className="margin-left"
        type="submit"
        value="Submit!"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default CreateNewContactFormPage;

CreateNewContactFormPage.propTypes = {
  setContactInfoList: PropTypes.func,
  contactInfoList: PropTypes.arrayOf(PropTypes.object),
};
