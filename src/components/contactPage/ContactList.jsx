import { useContext } from "react";
import { ContactBookContext } from "../../context";
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  const { contacts } = useContext(ContactBookContext);

  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        contacts.map((contact, index) => {
          return <ContactListItem key={index} contact={contact} />;
        })
      )}
    </div>
  );
};

export default ContactList;
