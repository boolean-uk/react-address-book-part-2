import { Link } from "react-router-dom";

function Dashboard(props) {
  const { contacts, setCurrContactID } = props;
  console.log("In dashboard", contacts);
  setCurrContactID(parseInt(contacts.length) + 1);

  return (
    <main className="dashboard-layout">
      <section className="menu_section">
        <h2>Menu</h2>
        <Link to="/list">Contacts List</Link>
        <p></p>
        <Link to="/create">Add New Contact</Link>
      </section>
    </main>
  );
}

export default Dashboard;
