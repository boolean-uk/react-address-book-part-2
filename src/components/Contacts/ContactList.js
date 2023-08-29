import React from 'react'
import { Link } from 'react-router-dom'

function ContactList({ contactPerson }) {
  return (
    <main className='contact-list-container'>
      <section>
        <h2 className='contact-list-title'>Contacts</h2>
        {contactPerson.map((contact, index) => {
          return (
            <div key={index} className='contact-item'>
              <Link to={{
                  pathname: `/contacts/${contact.id}`,
                  state: { contact }
                }}
                className='contact-link'
                >
                  {contact.name}
              </Link>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default ContactList
