import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactBookContext } from "../../context";

const ContactForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isUpdate = id ? true : false;
  const { getContacts, contacts, updateContact, postContact } =
    useContext(ContactBookContext);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    street: "",
  });

  useEffect(() => {
    console.log("ContactForm useEffect");
    if (isUpdate) {
      const contact = contacts.find(
        (contact) => contact.id === parseInt(id, 10)
      );
      setNewContact(contact);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newContact.firstName || !newContact.lastName || !newContact.email) {
      alert("Please fill in all required fields.");
      return;
    }
    if (isUpdate) {
      await updateContact(id, newContact);
    } else {
      await postContact(newContact);
    }
    setNewContact({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      street: "",
    });

    getContacts();
    isUpdate ? navigate(`/contact/${id}`) : navigate("/contact");
  };

  return (
    <main className="contact-form">
      <h2>Create Contact</h2>
      <p>* = required fields</p>
      <form onSubmit={handleSubmit} className="contact-form__form">
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={newContact.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={newContact.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={newContact.email}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={newContact.city}
          onChange={handleChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={newContact.street}
          onChange={handleChange}
        />
        <button type="submit">{isUpdate ? "Update" : "Create"}</button>
      </form>
    </main>
  );
};

export default ContactForm;
