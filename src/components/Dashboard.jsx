import ContactsList from "./ContactsList";

function Dashboard({ contacts }) {
    return (
      <main className="dashboard-layout">
          <h2>Contacts</h2>
          <ContactsList contacts={contacts} />
      </main>
    );
}

export default Dashboard