import { useNavigate } from "react-router-dom";

function AddNewContact(props) {
  const newContact = {
    firstName: null,
    lastName: null,
    street: null,
    city: null,
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      newContact.firstName !== null &&
      newContact.lastName !== null &&
      newContact.street !== null &&
      newContact.city !== null
    ) {
      newContact.id = props.people.length + 1;
      props.addNewContact(newContact);
      navigate("/contacts-list");
    } else {
      alert("Please enter information!");
    }
  };

  return (
    <div id="add-new-contact">
      <h1>Create Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <br></br>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => (newContact.firstName = e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <br></br>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => (newContact.lastName = e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <br></br>
          <input
            type="text"
            id="street"
            name="street"
            onChange={(e) => (newContact.street = e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <br></br>
          <input
            type="text"
            id="city"
            name="city"
            onChange={(e) => (newContact.city = e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddNewContact;
