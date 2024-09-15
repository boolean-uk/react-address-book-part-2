import { useContext } from "react";
import { ContactFormContext } from "./ContactForm";

export default function ContactFormInput({
  name,
  placeholder = "",
  type = "text",
}) {
  const { handleChange, formState } = useContext(ContactFormContext);
  let normalizedName = name.replace(/\s/g, "");
  normalizedName = normalizedName[0].toLowerCase() + normalizedName.slice(1);

  return (
    <>
      <label className="ab-label" htmlFor={normalizedName}>
        {name}
      </label>
      <input
        onChange={(e) => handleChange(e)}
        value={formState[normalizedName] || ""}
        type={type}
        className="ab-input"
        name={normalizedName}
        placeholder={placeholder}
      />
    </>
  );
}
