import React from 'react'
import ContactList from './Component/ContactList'

function Dashboard({contacts, updateContacts}) {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>Contacts</h2>
        {contacts && <ContactList contacts={contacts} updateContacts={updateContacts} />}
      </section>
    </main>
  )
}

export default Dashboard