import React from "react";

function ContactItem({ contactItem }) {
  return (
    <div className="contact-item">
      <h3>{contactItem.firstName} {contactItem.lastName}</h3>
      <p>Email: {contactItem.email}</p>
      <p>Phone: {contactItem.phone}</p>
      <p>Address: {contactItem.street}, {contactItem.city}, {contactItem.zip}</p>
    </div>
  );
}

export default ContactItem;
