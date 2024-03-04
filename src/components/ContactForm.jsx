import ContactFormInput from "./ContactFormInput";
import "../styles/ContactForm.css";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postContact, updateContact } from "../services/ContactService";

const initialFormState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  jobTitle: "",
};

export const ContactFormContext = createContext();

export default function ContactForm({ contact }) {
  const [formState, setFormState] = useState(contact || initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = contact
      ? await updateContact({ ...contact, ...formState })
      : await postContact(formState);
    setIsLoading(false);
    if (data) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form className="ab-form" onSubmit={(e) => handleSubmit(e)}>
      <h1>{!contact ? "Add Contact" : "Edit Contact"}</h1>
      {!isLoading && (
        <ContactFormContext.Provider value={{ handleChange, formState }}>
          <ContactFormInput name="First Name" />
          <ContactFormInput name="Last Name" />
          <ContactFormInput name="Street" />
          <ContactFormInput name="City" />
          <ContactFormInput name="Job Title" />
        </ContactFormContext.Provider>
      )}
      <button type="submit" className="ab-btn">
        {!contact ? "Register" : "Edit"}
      </button>
    </form>
  );
}
