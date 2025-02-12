import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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

function CreateContact() {
  const [formData, setFormData] = useState(initialData);
  const { updateContacts } = useContext(ContactsContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var reqData = { ...formData };
    reqData.latitude = Math.random() * 180 - 90;
    reqData.longitude = Math.random() * 360 - 180;
    fetch(ApiBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    })
      .then((res) => {
        if (!res) {
          throw new Error("Failed to create contact!");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Created contact: ", data);
        updateContacts();
        navigate("/contact/" + data.id);
      });
  };

  return (
    <MainContent title="Creating contact:">
      <ContactForm
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        submitText={"Create Contact"}
      />
    </MainContent>
  );
}

export default CreateContact;
