import { useNavigate } from "react-router-dom";
export default function UpdateContact({
  allContacts,
  selectedContact,
  setSelectedContact,
}) {
  const navigate = useNavigate();

  function handleInput(event) {
    const { name, value } = event.target;
    setSelectedContact({
      ...selectedContact,
      [name]: value,
    });
  }

  console.log("selected contact changes", selectedContact);
  console.log("updated all Contacts", allContacts);

  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://boolean-uk-api-server.fly.dev/zainabch123/contact/" +
        selectedContact.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedContact.id,
          firstName: selectedContact.firstName,
          lastName: selectedContact.lastName,
          city: selectedContact.city,
          street: selectedContact.street,
        }),
      }
    ).then(() => navigate(`/view/${selectedContact.id}`));
  }
  return (
    <section>
      <h2>Update Contact</h2>
      <form className="update-contact-form" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={selectedContact.firstName}
          onChange={handleInput}
        ></input>
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={selectedContact.lastName}
          onChange={handleInput}
        ></input>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={selectedContact.street}
          onChange={handleInput}
        ></input>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={selectedContact.city}
          onChange={handleInput}
        ></input>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
