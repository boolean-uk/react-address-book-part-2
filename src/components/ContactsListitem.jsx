import { Link } from "react-router-dom";
function ContactsListItem(props) {
  const { contact } = props;
  return (
    <li className="list-item">
      <Link to={`/contacts/${contact.id}`}>
        {contact.firstName + " " + contact.lastName}
      </Link>
    </li>
  );
}
export default ContactsListItem;
