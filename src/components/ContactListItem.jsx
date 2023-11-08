//UNTESTED DRAFT
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
        {/*change line 8 based on what the routes are called in App.jsx*/}
        <button onClick={() => navigate(`/view/${contact.id}`)}>View</button>
        {/* commented out as it is an extension */}
        <button className="delete" onClick={()  => deleteContact(contact.id)}>Delete</button>
      </li>
    </>
  );
}
