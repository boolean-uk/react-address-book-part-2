import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";
import { editContact } from "../helpers/APIRequester";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../ContactsProvider";
import { validateFormInput } from "../helpers/ValidateInput";
export default function UpdateContactForm() {
  const { contacts, setContacts } = useContext(ContactContext);
  const navigate = useNavigate();
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    latitude: "",
    longitude: "",
    favouriteColour: "",
    profileImage: "",
  });
  const params = useParams();
  const id = params.id;
  const [formData, setFormData] = useState(
    contacts.find((contact) => contact.id.toString() === params.id.toString())
  );

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const isValid = validateFormInput(setError, formData);
    if (!isValid) return;
    await editContact(id, formData);
    setContacts((prevContacts) => {
      return prevContacts.map((contact) => {
        if (contact.id.toString() === id.toString()) {
          return formData;
        } else {
          return contact;
        }
      });
    });
    navigate("/view");
  };

  return (
    <div>
      <h1>Update Contact</h1>
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}
