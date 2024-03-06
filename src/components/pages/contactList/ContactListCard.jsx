import { useState } from "react";
import { Link } from "react-router-dom";

function ContactListCard({ contact }) {
  return (
    <Link className="card" to={`/contacts/${contact.id}`}>
      <img id="profile-pic" src={contact.profileImage}></img>
      <h2 id="name">{`${contact.firstName} ${contact.lastName}`}</h2>
      <p id="job-title">{contact.jobTitle}</p>
      <p id="email">{contact.email}</p>
    </Link>
  );
}

export default ContactListCard;
