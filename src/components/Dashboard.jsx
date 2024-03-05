import ContactsList from './ContactsList'

export default function Dashboard(props) {
  const { contacts } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Existing Contacts</h2>
        <ContactsList contacts={contacts} />
      </section>
    </main>
  );
}
