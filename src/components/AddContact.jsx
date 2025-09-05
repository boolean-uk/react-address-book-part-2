import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../App";
import ContactForm from "./ContactForm";

function AddContact() {
  const { setContactList, url } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleAdd = async (formData) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newContact = await response.json();
      setContactList(prev => [...prev, newContact]);
      navigate("/contacts");
    }
  };

  return (
    <div>
      <h2><strong>Create Contact</strong></h2>
      <ContactForm
        initialData={{ firstName: "", lastName: "", street: "", city: "", email: "", gender: "", jobTitle: "", favouriteColour: "", profileImage: "https://www.gravatar.com/avatar/Ellis.Towne@gmail.com?s=120&d=identicon", latitude: "", longitude: "" }}
        onSubmit={handleAdd}
        buttonLabel="Add Contact"
      />
    </div>
  );
}

export default AddContact;
