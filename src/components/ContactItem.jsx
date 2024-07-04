import React from "react";

function ContactItem({ contactItem }) {

  return (
    <>
      <h3>
        {contactItem.firstName} {contactItem.lastName}
      </h3>
    </>
  );
}

export default ContactItem;
