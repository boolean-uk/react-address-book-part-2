import { Link } from "react-router-dom";

function ContactListItem(props) {
  const { contact } = props;

  return (
    <li>
      <div
        style={{
          background: contact.favouriteColour,
          width: "30%",
          border: "1px dotted gray",
          margin: "5px",
        }}
      >
        <h4>
          {contact.firstName} {contact.lastName}
        </h4>
        <Link to={`/contacts/${contact.id}`}>View {contact.lastName}</Link>
      </div>
    </li>
  );
}

export default ContactListItem;
