import ContactList from "./ContactList";

function Dashboard() {
  return (
    <main>
      <section className="dashboard">
        <h2>Contacts:</h2>
        <ContactList />
      </section>
    </main>
  );
}

export default Dashboard;
