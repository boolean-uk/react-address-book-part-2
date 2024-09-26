import ContactFormInput from "./FormInput";
import "../styles/ContactForm.css";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

export const FormContext = createContext();

export default function Form() {
  const [formState, setFormState] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const postContact = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      "https://boolean-api-server.fly.dev/alexanderell/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    )
      .catch((e) => console.log(e))
      .finally(setIsLoading(false));
    const data = await response.json();
    setFormState(initialFormState);
    if (data) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form className="ab-form" onSubmit={postContact}>
      <h1>Add Contact</h1>
      {!isLoading && (
        <FormContext.Provider value={{ handleChange, formState }}>
          <ContactFormInput name="First Name" />
          <ContactFormInput name="Last Name" />
          <ContactFormInput name="Street" />
          <ContactFormInput name="City" />
        </FormContext.Provider>
      )}
      <button type="submit" className="ab-btn">
        Register
      </button>
    </form>
  );
}
