import ContactsList from './ContactsList'

export default function Dashboard(props) {
  const { contacts, setContacts, setDataFetched } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Existing Contacts</h2>
        <ContactsList contacts={contacts} setContacts={setContacts} setDataFetched={setDataFetched}/>
      </section>
    </main>
  );
}
