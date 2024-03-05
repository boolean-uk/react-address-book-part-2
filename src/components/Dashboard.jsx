import ContactList from "./ContactList";

export default function Dashboard(props) {
  const { contacts } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </section>
    </main>
  );
} 

