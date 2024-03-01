import React from 'react'
import ContactList from './Component/ContactList'

function Dashboard({contacts}) {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>Contacts</h2>
        {contacts && <ContactList contacts={contacts} />}
      </section>
    </main>
  )
}

export default Dashboard