import { useNavigate } from "react-router-dom";

export default function ContactsListItem(props) {
  const { contact, deleteContact } = props;

  const navigate = useNavigate();

  return (
    <>
      <li>
        <p>
          {contact.firstName + " " + contact.lastName}
        </p>
        <button onClick={() => navigate(`/view/${contact.id}`)}>View</button>
        <button className="delete" onClick={()  => deleteContact(contact.id)}>Delete</button>
      </li>
    </>
  );
}