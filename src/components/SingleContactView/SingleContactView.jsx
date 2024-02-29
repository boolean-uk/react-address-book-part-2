import { useEffect, useState } from "react";
import "./SingleContactView.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
function SingleContactView({ contacts, fetchContacts, edit }) {
  const { id } = useParams();
  const locationData = useLocation();

  function callFetchContacts() {
    console.log("Calling fetchContacts");
    fetchContacts();
  }
  useEffect(() => {
    callFetchContacts();
  }, [locationData]);
  const contact = contacts.find((contact) => contact.id.toString() === id);
  const navigate = useNavigate();
  const navigateToEditPage = () => {
    navigate("/contacts/" + id + "/edit");
  };

  const sendDeleteRequest = async () => {
    const deleteEndpoint = `https://boolean-api-server.fly.dev/martenere/contact/${id}`;
    const options = {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(deleteEndpoint, options);
    let data = await res.json();
    console.log(data);
    navigate("/contacts");
  };

  if (!contact) {
    return <div className="contact-not-found">Contact not found</div>;
  }
  return (
    <>
      <div className="contact-view">
        <img
          src={contact.profileImage}
          alt={`${contact.firstName} ${contact.lastName}`}
          className="contact-image"
        />
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Job Title:</strong> {contact.jobTitle}
        </p>
        <p>
          <strong>Address:</strong> {contact.street}, {contact.city}
        </p>
        <p>
          <strong>Coordinates:</strong> {contact.latitude}, {contact.longitude}
        </p>
        <p
          style={{ backgroundColor: contact.favouriteColour }}
          className="favourite-colour"
        >
          Favourite Colour
        </p>
        <button onClick={sendDeleteRequest}>Delete</button>
        <button onClick={navigateToEditPage}>Edit</button>
      </div>
      {edit && (
        <>
          <ContactForm method="PUT" contact={contact} />
        </>
      )}
    </>
  );
}

export default SingleContactView;