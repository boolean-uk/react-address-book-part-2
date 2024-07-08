import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ContactDetails() {
  const [contact, setContact] = useState({});
  const [updatedContact, setUpdatedContact] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://boolean-api-server.fly.dev/AlexanderNiklasson/contact/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContact(data);
        setUpdatedContact(data);
        setIsLoading(false);
      });
  }, [id]);

  const deleteContact = () => {
    fetch(
      `https://boolean-api-server.fly.dev/AlexanderNiklasson/contact/${contact.id}`,
      {
        method: "DELETE",
      }
    );
    navigate("/");
  };

  const updateContact = () => {
    fetch(
      `https://boolean-api-server.fly.dev/AlexanderNiklasson/contact/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      }
    )
      .then(() => {
        setContact(updatedContact);
        setShowModal(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating contact:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  return (
    <div style={{ backgroundColor: `${contact.favouriteColour}` }}>
      <h1>Contact Details</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="contact-details">
          <img src={contact.profileImage} alt={contact.firstName} />
          <h2>
            {contact.firstName} {contact.lastName}
          </h2>
          <p>Gender: {contact.gender}</p>
          <p>Email: {contact.email}</p>
          <p>Job title: {contact.jobTitle}</p>
          <p>Street: {contact.street}</p>
          <p>City: {contact.city}</p>
          <iframe
            width="400"
            height="250"
            src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}
            title={"x"}></iframe>
          <div className="contact-details-buttons">
            <button onClick={deleteContact}>Delete</button>
            <button onClick={() => setShowModal(true)}>Edit</button>
          </div>

          {showModal && (
            <div className="modal" style={{ display: "block" }}>
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <h2>Edit Contact</h2>
                <form className="modal-form">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updatedContact.firstName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updatedContact.lastName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="gender">Gender:</label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={updatedContact.gender}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={updatedContact.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="jobTitle">Job Title:</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={updatedContact.jobTitle}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="street">Street:</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={updatedContact.street}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={updatedContact.city}
                    onChange={handleInputChange}
                  />

                  <button type="button" onClick={updateContact}>
                    Update
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
