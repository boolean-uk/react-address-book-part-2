function ContactListItem({ contact }) {
    return (
      <li className="contact-li">
        <h3>
          {contact.firstName} {contact.lastName}
        </h3>
      </li>
    );
}

export default ContactListItem