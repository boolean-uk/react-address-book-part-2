import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ContactListItem() {
  const [contact, setContact] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://boolean-api-server.fly.dev/Callumhayden99/contact/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setContact(data);
        } else {
          throw new Error("Failed to fetch contact data");
        }
      } catch (error) {
        setContact(null);
      }
    };

    fetchContact();
  }, [id]);

  if (contact === null) {
    return <p>Loading</p>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const remove = () => {
    const options = { method: "DELETE" };

    fetch(
      `https://boolean-api-server.fly.dev/Callumhayden99/contact/${id}`,
      options
    )
      .then((response) => response.json())
      .then((data) => data);
    navigate("/contact/List");
  };

  return (
    <>
      <div className="list-item">
        <h2 className="list-item-name">
          {contact.firstName} {contact.lastName}
        </h2>
        <div className="street-city">
          {contact.street} {contact.city}
        </div>
        <button className="back-button" onClick={handleGoBack}>
          Back
        </button>
        <button className="delete-button" onClick={remove}>
          Delete
        </button>
      </div>
    </>
  );
}

export default ContactListItem;
