import { useContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import "./Contact.css";
import BackButton from "../../ui/common/BackButton";
import ContactEditor from "../contactEditor/ContactEditor";
import ContactDetails from "./ContactDetails";

function Contact() {
  const { getContactById, isFetching } = useContext(UserContext);
  const [contact, setContact] = useState(undefined);
  const { id } = useParams();

  const updateContactData = () => {
    const data = getContactById(id);
    setContact(data);
  };

  useEffect(() => {
    if (!isFetching) {
      updateContactData();
    }
  }, [isFetching]);

  if (!contact) {
    return <div className="contact-page">Loading...</div>;
  }

  return (
    <div className="contact-page">
      <div className="header">
        <BackButton />
      </div>
      <ContactDetails contact={contact} />
      <Routes>
        <Route path="edit" element={<ContactEditor contact={contact} />} />
      </Routes>
    </div>
  );
}

export default Contact;
