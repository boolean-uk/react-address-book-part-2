import React from 'react'
import ContactList from './Component/ContactList'

function Dashboard({contacts}) {
  return (
    <main className="dashboard-layout">
      <button></button>
      <section>
        <h2>People</h2>
        <ContactList contacts={contacts} />
      </section>
    </main>
  )
}

export default Dashboard