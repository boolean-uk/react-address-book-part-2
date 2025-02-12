
import ContactsList from './components/ContactsList'

function Dashboard() {



  return (
    <main className="dashboard-layout">
      <section>
        <h2>Contacts</h2>
        <ContactsList />
      </section>
    </main>
  )
}

export default Dashboard