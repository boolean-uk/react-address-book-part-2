//import { Link } from "react-router-dom";
import ContactsList from "./components/ContactsList";

function ShowContacts(props) {
  const { contacts } = props;
  console.log("In showcontacts", contacts);

  return (
    <ul>
      <h3>Contacts</h3>
      <ContactsList contacts={contacts} />
    </ul>
  );
}

export default ShowContacts