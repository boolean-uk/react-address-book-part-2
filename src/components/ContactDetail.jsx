import { useLocation, useNavigate } from "react-router-dom";

export default function ContactDetail() {
  const { state: contact } = useLocation();
  const navigate = useNavigate();

  const deleteContact = async () => {
    const response = await fetch(
      `https://boolean-api-server.fly.dev/Sabbasn/contact/${contact.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>Occupation: {contact.jobTitle}</p>
      <p>
        Address: {contact.street}, {contact.city}
      </p>
      <button onClick={deleteContact} className="ab-btn">
        Delete
      </button>
    </div>
  );
}
