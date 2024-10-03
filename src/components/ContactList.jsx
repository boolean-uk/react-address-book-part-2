import ContactItem from "./ContactItem";
import { Context } from "../App";
import { useContext } from "react";

export default function ContactList() {
  console.log("contact list hit");

  const { contacts } = useContext(Context);

  console.log(contacts)

  return (
    <ul>
      {contacts.map((contactItem, i) => (
        <ContactItem contactItem={contactItem} key={i} />
      ))}
    </ul>
  );
}
