import { useLocation } from "react-router-dom";

function ViewContactDetails() {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div className="menuRight">
      <h1 className="headerRight">Contact Details</h1>
      <div>
        <p>
          Full Name: <strong>{contact.name}</strong>
        </p>
        <p>
          Street Address: <strong>{contact.address.street}</strong>
        </p>
        <p>
          City: <strong>{contact.address.city}</strong>
        </p>
      </div>
    </div>
  );
}

export default ViewContactDetails;
