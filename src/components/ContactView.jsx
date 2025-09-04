import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ApiContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";

function ContactView() {
  const fetchUserUrl =
    "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact/";
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { refreshData } = useContext(ApiContext);

  useEffect(() => {
    fetch(fetchUserUrl + id)
      .then((res) => res.json())
      .then((result) => {
        setContact(result);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("CONTACT", contact);
  }, [contact]);

  if (isLoading) return <div></div>;

  const handleEdit = () => {
    navigate("/edit/" + contact.id);
  };

  const handleRemove = () => {
    fetch(fetchUserUrl + contact.id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("fail response");
        }
        return res.json();
      })
      .then((data) => {
        console.log("success response:", data);
      })
      .catch((err) => {
        console.error("error:", err);
      });

    navigate("/");
    setTimeout(refreshData, 300);
  };

  return (
    <div className="contactView">
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <p>{contact.gender}</p>

      <img src={contact.profileImage} />
      <h5>{contact.jobTitle}</h5>
      <p>
        {contact.street}, {contact.city}
      </p>
      <p>
        {contact.latitude}, {contact.longitude}
      </p>

      <button onClick={handleEdit} className="editButton">
        Edit
      </button>
      <button onClick={handleRemove} className="removeButton">
        Remove
      </button>
    </div>
  );
}

export default ContactView;
