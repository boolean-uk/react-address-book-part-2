import { Link } from "react-router-dom";
import type { ContactInfo } from "../types";

function ContactItem({ contact }: { contact: ContactInfo }) {
  return (
    <>
      <li className="contact-item">
        <p>
          {contact.firstName} {contact.lastName}
        </p>
        <div className="contact-links">
          <Link to={`/contact/${contact.id}`}>
            <p>View</p>
          </Link>
        </div>
      </li>
      <hr />
    </>
  );
}

export default ContactItem;
