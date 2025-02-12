import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

function DashboardSection() {
  const { contacts, setContacts } = useContext(MyContext);

  return (
    <section>
      <h2>Menu</h2>
      <Link to="/contacts">
        <h4>Contacts List</h4>
      </Link>

      <Link to="/contacts/create">
        <h4>Add New Contact</h4>
      </Link>
    </section>
  );
}

export default DashboardSection;
