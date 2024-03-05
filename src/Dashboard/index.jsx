import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Welcome to your Address Book</h2>
      <Link style={{ width: "15%" }} to={"/contacts"}>
        View Contacts
      </Link>
      <Link style={{ width: "15%" }} to={"/contacts/create"}>
        Create a new Contact
      </Link>
    </div>
  );
}

export default Dashboard;
