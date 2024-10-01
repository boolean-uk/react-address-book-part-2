import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";

export default function ContactDetails() {
  const { id } = useParams();
  const { contacts } = useContext(Context);

  const contact = contacts[id];

  return (
    <div className="contact-details">
      <p>
        {contact.firstName} {contact.lastName}
      </p>
    </div>
  );
}
