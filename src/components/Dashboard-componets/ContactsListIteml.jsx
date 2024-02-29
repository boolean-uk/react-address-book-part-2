import { Link } from "react-router-dom";

function ContactsListItem(props) {
  console.log("props in ContactsListItem: ", props);
  const { contact } = props;
  return (
    <>
      <div className="contact-item-container">
        {`${contact.firstName} ${contact.lastName}`}
        <Link to={`/view/${contact.id}`}>
          View<span className="material-symbols-outlined">double_arrow</span>
        </Link>
      </div>
    </>
  );
}

export default ContactsListItem;
