import { Link } from "react-router-dom";

export const ContactListItem = ({ contact }) => {
  // console.log("ContactListItem", contact);
  return (
    <li>
      {`${contact.firstName} ${contact.lastName}`}{" "}
      <Link to={`/contacts/${contact.id}`}>View</Link>
    </li>
  );
};
