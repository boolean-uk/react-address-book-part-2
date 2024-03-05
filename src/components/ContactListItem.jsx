import { Link } from "react-router-dom";

export default function ContactListItem(props) {
  const { contact } = props;

  return (
    <li>
      <h3>
        <Link to={`/view/${contact.id}`}>
          {contact.firstName} {contact.lastName + " "}
        </Link>
      </h3>
    </li>
  );
}
