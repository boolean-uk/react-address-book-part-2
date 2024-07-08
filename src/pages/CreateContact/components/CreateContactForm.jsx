import { useNavigate } from "react-router-dom";

export default function CreateContactForm() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const street = event.target.street.value;
    const city = event.target.city.value;
    const profileImage = `https://www.gravatar.com/avatar/${firstName}.${lastName}99@hotmail.com?s=120&d=identicon`;
    const email = event.target.email.value;
    const jobTitle = event.target.jobTitle.value;
    const gender = event.target.gender.value;
    const contact = {
      firstName,
      lastName,
      street,
      city,
      profileImage,
      email,
      jobTitle,
      gender,
    };
    fetch("https://boolean-api-server.fly.dev/AlexanderNiklasson/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    navigate("/");
  };
  return (
    <form className="create-contact-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" />
      <label htmlFor="gender">Gender</label>
      <input id="gender" name="gender" type="text"></input>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="text"></input>
      <label htmlFor="jobTitle">Job Title</label>
      <input id="jobTitle" name="jobTitle" type="text"></input>
      <label htmlFor="street">Street</label>
      <input id="street" name="street" type="text" />
      <label htmlFor="city">City</label>
      <input id="city" name="city" type="text" />
      <button type="submit">Create</button>
    </form>
  );
}
