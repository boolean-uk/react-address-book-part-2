import { Link } from "react-router-dom";

export default function Contact({ contact }) {
  return (
    <li>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <p>Job: {contact.jobTitle || "Unemployed"}</p>
      <Link to={`/view/${contact.id}`} state={contact}>
        View
      </Link>
    </li>
  );
}
