import "../App.css";
import ContactList from "./ContactList";

function DashBoard({contacts}) {
  return (
      <div>
        <h1>Contacts</h1>
        <ContactList contacts={contacts} />
      </div>
  );
}

export default DashBoard;
