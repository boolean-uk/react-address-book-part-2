import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PersonalContact() {
  const location = useLocation();

  const [contact, setContact] = useState(null);

  console.log(` This is ${location}`);

  useEffect(() => {
    setContact(location.state.data);
  }, [location]);

  /// [location] if the location value changes set setPersonContact to location.state

  if (!contact) {
    return <div>Loading.......</div>;
  }

  return (
    <>
      <strong>{`${contact.firstName} ${contact.lastName} `}</strong>
      <p>{`${contact.street} ${contact.city}`}</p>
    </>
  );
}

export default PersonalContact;
