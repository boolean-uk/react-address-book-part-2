import { useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'

export default function ContactsListPage() {
  const context = useContext(AppContext)

  // console.log(context.contacts)
  return (
    <section className='contacts-list'>
      <h2>Contacts list</h2>
      <ul>
        {context.contacts && context.contacts
        .filter(
          contact => `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(context.searchValue.toLowerCase())
        )
        .map((contact, index) => 
          // console.log(contact)
          <Link key={index} to={`/contact/${contact.id}`}>
            <li key={index}>{contact.firstName} {contact.lastName}</li>
          </Link>
        )}
      </ul>
    </section>
  )
}