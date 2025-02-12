import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ApiBase, ContactsContext } from "../../App";
import MainContent from "./MainContent";
import ContactForm from "./ContactForm";

const initialData = {
  firstName: "",
  lastName: "",
  gender: "",
  jobTitle: "",
  street: "",
  city: "",
};

function EditContact() {
  const [formData, setFormData] = useState(initialData);
  const { id } = useParams();
  const { contacts, updateContacts } = useContext(ContactsContext);
  const contact = contacts.find((el) => el.id == id);
  const navigate = useNavigate();
  useEffect(() => {
    if (contact == null) return;
    setFormData({
      firstName: contact.firstName,
      lastName: contact.lastName,
      gender: contact.gender,
      jobTitle: contact.jobTitle,
      street: contact.street,
      city: contact.city,
    });
  }, [contact]);
  if (contact == null) return <p>Failed to load contact...</p>;
  const fullName = `${contact.firstName} ${contact.lastName}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(ApiBase + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res) {
          throw new Error("Failed to update contact!");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Updated contact: ", data);
        updateContacts();
        navigate("/contact/" + id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MainContent title={`Editing: "${fullName}"`}>
      <ContactForm
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        submitText={"Edit Contact"}
      />
    </MainContent>
  );
}

export default EditContact;
