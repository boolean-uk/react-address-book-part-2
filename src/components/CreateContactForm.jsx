import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createContact } from "../helpers/APIRequester";
import ContactForm from "./ContactForm";
import { ContactContext } from "../ContactsProvider";
export function CreateContactForm() {
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

  function clearErrors() {
    setError({
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
  }

  function validateFormInput() {
    const { profileImage, latitude, longitude, email } = formData;
    clearErrors();
    let isValid = true;
    if (profileImage && !profileImage.match(/\.(jpeg|jpg|gif|png)$/)) {
      setError((prevError) => ({
        ...prevError,
        profileImage: "Invalid image file",
      }));
      isValid = false;
    }
    if (latitude < -90 || latitude > 90) {
      setError((prevError) => ({
        ...prevError,
        latitude: "Invalid latitude",
      }));
      isValid = false;
    }
    if (longitude < -180 || longitude > 180) {
      setError((prevError) => ({
        ...prevError,
        longitude: "Invalid longitude",
      }));
      isValid = false;
    }
    if (
      email &&
      !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      setError((prevError) => ({
        ...prevError,
        email: "Invalid email",
      }));
      isValid = false;
    }
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateFormInput();
    if (!isValid) return;
    setError("");
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
        error={error}
      />
    </>
  );
}
