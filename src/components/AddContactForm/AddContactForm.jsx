import { useState } from "react";
import "./AddContactForm.css";
import { useNavigate } from "react-router-dom";
const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  city: "",
  street: "",
};

function AddContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    //Dont navigate before api-call i complete,
    // or data rendered in contacts wont contain new entry
    await postApiRequest();
    navigate("/contacts");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  async function postApiRequest() {
    const url = "https://boolean-api-server.fly.dev/martenere/contact";
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      street: formData.street,
      city: formData.city,
      gender: "Male",
      email: "rick@sanchez.com",
      jobTitle: "Scientist",
      latitude: 42,
      longitude: 629,
      favouriteColour: "#0d7f26",
      profileImage:
        "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon",
    };
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    let res = await fetch(url, postOptions);
    let data = await res.json();
    console.log(data);
  }

  return (
    <div className="center">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="header-text">Add new Contact</div>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={handleChange} />
          </label>
          <label>
            Street:
            <input type="text" name="street" onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}
export default AddContactForm;
