import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
function CreateNewContactFormPage(props) {
  const { setConstactInfoList, contactInfoList } = props;
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    email: "",
    favouriteColour: "",
    profileImage: "",
  });

  function handelInputData(event) {
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
  }
  function handleSubmit() {
    const number = contactInfoList.length + 1;
    const contact = { ...newContact, id: number };
    setNewContact(contact);

    console.log(newContact);

    MakePostRequestToAPI(newContact);
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
        setConstactInfoList([...contactInfoList, data]);
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
            onChange={handelInputData}
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
            onChange={handelInputData}
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
            onChange={handelInputData}
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
            onChange={handelInputData}
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
            onChange={handelInputData}
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
            onChange={handelInputData}
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
            onChange={handelInputData}
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
  setConstactInfoList: PropTypes.func,
  contactInfoList: PropTypes.arrayOf(PropTypes.object),
};
