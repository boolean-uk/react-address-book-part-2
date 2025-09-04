import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../App";

function ContactListItem({ contact }) {
  const deleteContactUrl =
    "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact/";
  const navigate = useNavigate();
  const { refreshData } = useContext(ApiContext);

  const handleClick = () => {
    navigate(`/view/${contact.id}`);
  };

  const handleRemove = () => {
    fetch(deleteContactUrl + contact.id, {
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

  const handleEdit = () => {
    navigate("edit/" + contact.id);
  };

  return (
    <div className="contactListItem">
      <article className="contactListArticle">
        <h4 onClick={handleClick}>
          {contact.firstName} {contact.lastName}{" "}
        </h4>
        <button onClick={handleEdit} className="editButton">
          Edit
        </button>
        <button onClick={handleRemove} className="removeButton">
          X
        </button>
      </article>
    </div>
  );
}

export default ContactListItem;
