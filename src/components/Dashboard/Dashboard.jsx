import ContactList from './ContactList'

function Dashboard(props) {
  const { contacts } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Contacts</h2>
        {contacts.length > 0 &&
        <ContactList contacts={contacts} />}
      </section>
    </main>
    
  )
}

export default Dashboard