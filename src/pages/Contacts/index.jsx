import ContactList from "./components/ContactList";

function Contacts({ contacts = [] }) {
  return (
    <main className="contact-layout">
      <section>
        <h1>Contacts</h1>
        <ContactList contacts={contacts} />
      </section>
    </main>
  );
}

export default Contacts;
