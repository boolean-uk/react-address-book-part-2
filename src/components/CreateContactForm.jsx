import React, { useState } from "react";
import FormInfo from "./FormInfo";
import { useNavigate } from "react-router-dom";
import { createContact } from "../helpers/APIRequester";
import ContactForm from "./ContactForm";
export function CreateContactForm({ setContacts }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "",
    profileImage: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.latitude = parseFloat(formData.latitude);
    formData.longitude = parseFloat(formData.longitude);
    console.log(formData);
    const out = await createContact(formData);
    console.log(out);
    setContacts((prevContacts) => {
      return [...prevContacts, formData];
    });
    navigate("/view");
  };

  return (
    <>
      <h1>Create Contact</h1>
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
