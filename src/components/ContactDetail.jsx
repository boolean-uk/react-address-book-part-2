import { useLocation } from "react-router-dom";

export default function ContactDetail() {
  const { state: contact } = useLocation();
  return (
    <div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>Occupation: {contact.jobTitle}</p>
      <p>
        Address: {contact.street}, {contact.city}
      </p>
    </div>
  );
}
