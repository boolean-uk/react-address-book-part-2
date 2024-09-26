import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findContactById } from "../../api/ContactAPI";

export function ViewContactComponent() {

    const [contact, setContact] = useState(null);
    const { contactId } = useParams();

    useEffect(() => {
    const fetchContact = async () => {
        try {
        const data = await findContactById(contactId);
        setContact(data);
        } catch (error) {
        console.error("Failed to fetch contact details", error);
        }
    };

    fetchContact();
    }, [contactId]); 
    if (!contact) {
    return <div>Loading contact details...</div>;
    }

  return (
    <div className="viewContact">
      <p>
        <strong>First Name: </strong>
        {contact.firstName}
      </p>
      <br />
      <p>
        <strong>Last Name: </strong>
        {contact.lastName}
      </p>
      <br />
      <p>
        <strong>Gender: </strong>
        {contact.gender}
      </p>
      <br />
      <p>
        <strong>Email: </strong>
        {contact.email}
      </p>
      <br />
      <p>
        <strong>Job Title: </strong>
        {contact.jobTitle}
      </p>
      <br />
      <p>
        <strong>Street: </strong>
        {contact.street}
      </p>
      <br />
      <p>
        <strong>City: </strong>
        {contact.city}
      </p>
      <br />
      <p>
        <strong>Favourite color: </strong>
      </p>
      <div
        style={{
          backgroundColor: contact.favouriteColour,
          width: "100px",
          height: "20px",
          borderRadius: "5px",
        }}
      ></div>
      <br />
      <p>
        <strong>Profile image: </strong>
      </p>
      <br />
      <img
        src={contact.profileImage}
        alt="Profile"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
      <br />
      <p>
        <strong>Position: </strong>
      </p>
      <br />
      <iframe
        width="100%"
        height="250"
        src={`https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&hl=en&z=14&output=embed`}
      ></iframe>
    </div>
  );
}
